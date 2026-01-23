import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, RotateCcw, Settings, X, GraduationCap, SkipForward, VolumeX } from "lucide-react";

interface TimerSettings {
  changeoverTime: number; // in seconds
  readingTime: number;
  answerTime: number;
  feedbackTime: number;
  totalStations: number;
}

type Phase = "changeover" | "reading" | "answer" | "feedback";

const DEFAULT_SETTINGS: TimerSettings = {
  changeoverTime: 60,  // 1 min
  readingTime: 60,     // 1 min
  answerTime: 300,     // 5 min
  feedbackTime: 180,   // 3 min
  totalStations: 9,    // 9 stations × 10 min = 90 min total
};

const PHASE_ORDER: Phase[] = ["changeover", "reading", "answer", "feedback"];

const PHASE_CONFIG = {
  changeover: {
    label: "Changeover Time",
    color: "from-amber-500 to-orange-400",
    bgColor: "bg-amber-500/20",
    textColor: "text-amber-400",
    borderColor: "border-amber-500",
  },
  reading: {
    label: "Reading Time",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-400",
    borderColor: "border-blue-500",
  },
  answer: {
    label: "Answer Time",
    color: "from-primary to-purple-500",
    bgColor: "bg-primary/20",
    textColor: "text-primary-light",
    borderColor: "border-primary",
  },
  feedback: {
    label: "Feedback Time",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/20",
    textColor: "text-green-400",
    borderColor: "border-green-500",
  },
};

export default function MMITimer() {
  const [settings, setSettings] = useState<TimerSettings>(DEFAULT_SETTINGS);
  const [showSettings, setShowSettings] = useState(false);
  const [tempSettings, setTempSettings] = useState<TimerSettings>(DEFAULT_SETTINGS);
  
  const [isRunning, setIsRunning] = useState(false);
  const [currentStation, setCurrentStation] = useState(1);
  const [currentPhase, setCurrentPhase] = useState<Phase>("changeover");
  const [timeRemaining, setTimeRemaining] = useState(DEFAULT_SETTINGS.changeoverTime);
  const [isComplete, setIsComplete] = useState(false);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const [isBuzzerPlaying, setIsBuzzerPlaying] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const buzzerTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getPhaseTime = useCallback((phase: Phase): number => {
    switch (phase) {
      case "changeover": return settings.changeoverTime;
      case "reading": return settings.readingTime;
      case "answer": return settings.answerTime;
      case "feedback": return settings.feedbackTime;
    }
  }, [settings]);

  const getNextPhase = (phase: Phase): Phase | null => {
    const currentIndex = PHASE_ORDER.indexOf(phase);
    if (currentIndex < PHASE_ORDER.length - 1) {
      return PHASE_ORDER[currentIndex + 1];
    }
    return null; // End of station
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const formatTotalTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const calculateTotalTime = (): number => {
    return settings.totalStations * (settings.changeoverTime + settings.readingTime + settings.answerTime + settings.feedbackTime);
  };

  const playBuzzer = useCallback(() => {
    // Stop any existing buzzer
    stopBuzzer();
    
    try {
      // Create audio context
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = audioContext;
      
      // Create oscillator for buzzer sound
      const oscillator = audioContext.createOscillator();
      oscillatorRef.current = oscillator;
      
      // Create gain node for volume control
      const gainNode = audioContext.createGain();
      gainNodeRef.current = gainNode;
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Set buzzer properties - loud, attention-grabbing sound
      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note
      
      // Pulsing effect
      const now = audioContext.currentTime;
      for (let i = 0; i < 10; i++) {
        oscillator.frequency.setValueAtTime(440, now + i * 0.5);
        oscillator.frequency.setValueAtTime(880, now + i * 0.5 + 0.25);
      }
      
      gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
      
      oscillator.start();
      setIsBuzzerPlaying(true);
      
      // Auto-stop after 5 seconds
      buzzerTimeoutRef.current = setTimeout(() => {
        stopBuzzer();
      }, 5000);
    } catch (error) {
      console.error("Error playing buzzer:", error);
    }
  }, []);

  const stopBuzzer = useCallback(() => {
    if (buzzerTimeoutRef.current) {
      clearTimeout(buzzerTimeoutRef.current);
      buzzerTimeoutRef.current = null;
    }
    
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
      } catch (e) {
        // Ignore if already stopped
      }
      oscillatorRef.current = null;
    }
    
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    
    gainNodeRef.current = null;
    setIsBuzzerPlaying(false);
  }, []);

  const advanceToNext = useCallback(() => {
    stopBuzzer();
    
    const nextPhase = getNextPhase(currentPhase);
    
    if (nextPhase) {
      // Move to next phase
      setCurrentPhase(nextPhase);
      setTimeRemaining(getPhaseTime(nextPhase));
    } else {
      // End of station
      if (currentStation < settings.totalStations) {
        // Move to next station
        setCurrentStation((s) => s + 1);
        setCurrentPhase("changeover");
        setTimeRemaining(settings.changeoverTime);
      } else {
        // MMI Complete
        setIsComplete(true);
        setIsRunning(false);
      }
    }
  }, [currentPhase, currentStation, settings, getPhaseTime, stopBuzzer]);

  const handleSkip = () => {
    if (isComplete) return;
    
    // Calculate time skipped and add to elapsed
    const timeSkipped = timeRemaining;
    setTotalElapsed((prev) => prev + timeSkipped);
    
    advanceToNext();
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && !isComplete) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Time's up - play buzzer
            playBuzzer();
            
            // Advance to next phase/station
            setTimeout(() => {
              advanceToNext();
            }, 100);
            
            return 0;
          }
          return prev - 1;
        });
        setTotalElapsed((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, isComplete, advanceToNext, playBuzzer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopBuzzer();
    };
  }, [stopBuzzer]);

  const handleStart = () => {
    if (isComplete) return;
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    stopBuzzer();
    setIsRunning(false);
    setCurrentStation(1);
    setCurrentPhase("changeover");
    setTimeRemaining(settings.changeoverTime);
    setIsComplete(false);
    setTotalElapsed(0);
  };

  const handleSaveSettings = () => {
    setSettings(tempSettings);
    setShowSettings(false);
    // Reset with new settings
    setIsRunning(false);
    setCurrentStation(1);
    setCurrentPhase("changeover");
    setTimeRemaining(tempSettings.changeoverTime);
    setIsComplete(false);
    setTotalElapsed(0);
  };

  const handleOpenSettings = () => {
    setTempSettings(settings);
    setShowSettings(true);
  };

  const phaseConfig = PHASE_CONFIG[currentPhase];
  const progress = ((getPhaseTime(currentPhase) - timeRemaining) / getPhaseTime(currentPhase)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-dark via-primary-dark to-secondary-dark text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Buzzer Silence Button - Floating */}
      {isBuzzerPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-900/50 backdrop-blur-sm animate-pulse">
          <Button
            onClick={stopBuzzer}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-16 py-10 text-3xl rounded-3xl shadow-2xl shadow-red-500/50 animate-bounce"
          >
            <VolumeX className="w-12 h-12 mr-4" />
            SILENCE BUZZER
          </Button>
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
              MyUCAT
            </h1>
            <p className="text-sm text-gray-400">MMI Timer</p>
          </div>
        </div>
        
        <Button
          onClick={handleOpenSettings}
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-white/10"
          disabled={isRunning}
        >
          <Settings className="w-6 h-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pb-12" style={{ minHeight: "calc(100vh - 120px)" }}>
        {isComplete ? (
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-green-500/30">
                <span className="text-5xl">✓</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                MMI Complete
              </h2>
              <p className="text-xl text-gray-400">
                Total time: {formatTotalTime(totalElapsed)}
              </p>
            </div>
            <Button
              onClick={handleReset}
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary-dark hover:to-purple-600 text-white px-12 py-6 text-xl rounded-2xl shadow-xl shadow-primary/30"
            >
              <RotateCcw className="w-6 h-6 mr-3" />
              Start New Session
            </Button>
          </div>
        ) : (
          <>
            {/* Station Indicator */}
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-lg font-medium text-gray-300">Station</span>
                <span className="text-2xl font-bold text-white">{currentStation}</span>
                <span className="text-lg text-gray-400">of {settings.totalStations}</span>
              </div>
            </div>

            {/* Station Progress Dots */}
            <div className="flex gap-2 mb-8">
              {Array.from({ length: settings.totalStations }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i + 1 < currentStation
                      ? "bg-green-400 shadow-lg shadow-green-400/50"
                      : i + 1 === currentStation
                      ? "bg-gradient-to-r from-primary to-purple-500 shadow-lg shadow-primary/50 scale-125"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Phase Progress (within station) */}
            <div className="flex gap-2 mb-6">
              {PHASE_ORDER.map((phase, i) => {
                const phaseIndex = PHASE_ORDER.indexOf(currentPhase);
                return (
                  <div
                    key={phase}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      i < phaseIndex
                        ? "bg-green-500/30 text-green-400"
                        : i === phaseIndex
                        ? `${PHASE_CONFIG[phase].bgColor} ${PHASE_CONFIG[phase].textColor} scale-110`
                        : "bg-white/10 text-gray-500"
                    }`}
                  >
                    {PHASE_CONFIG[phase].label.split(" ")[0]}
                  </div>
                );
              })}
            </div>

            {/* Phase Label */}
            <div className={`mb-6 px-8 py-3 rounded-2xl ${phaseConfig.bgColor} border ${phaseConfig.borderColor}`}>
              <h2 className={`text-2xl md:text-4xl font-bold ${phaseConfig.textColor}`}>
                {phaseConfig.label}
              </h2>
            </div>

            {/* Timer Display */}
            <div className="relative mb-8">
              <div className={`text-[120px] md:text-[180px] font-mono font-bold leading-none bg-gradient-to-r ${phaseConfig.color} bg-clip-text text-transparent drop-shadow-2xl`}>
                {formatTime(timeRemaining)}
              </div>
              
              {/* Progress bar */}
              <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${phaseConfig.color} transition-all duration-1000 ease-linear`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Total Elapsed */}
            <div className="mb-10 text-center">
              <p className="text-gray-400 text-lg">
                Elapsed: <span className="text-white font-mono">{formatTotalTime(totalElapsed)}</span>
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-500 font-mono">{formatTotalTime(calculateTotalTime())}</span>
              </p>
            </div>

            {/* Control Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
              {!isRunning ? (
                <Button
                  onClick={handleStart}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-10 py-6 text-xl rounded-2xl shadow-xl shadow-green-500/30 transition-all hover:scale-105"
                >
                  <Play className="w-7 h-7 mr-3" />
                  {totalElapsed > 0 ? "Resume" : "Start"}
                </Button>
              ) : (
                <Button
                  onClick={handlePause}
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-6 text-xl rounded-2xl shadow-xl shadow-amber-500/30 transition-all hover:scale-105"
                >
                  <Pause className="w-7 h-7 mr-3" />
                  Pause
                </Button>
              )}
              
              <Button
                onClick={handleSkip}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-xl rounded-2xl shadow-xl shadow-blue-500/30 transition-all hover:scale-105"
                disabled={isComplete}
              >
                <SkipForward className="w-6 h-6 mr-2" />
                Skip
              </Button>
              
              <Button
                onClick={handleReset}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-xl rounded-2xl transition-all hover:scale-105"
              >
                <RotateCcw className="w-6 h-6 mr-2" />
                Reset
              </Button>
            </div>
          </>
        )}
      </main>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-secondary-dark border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Timer Settings</h3>
                <Button
                  onClick={() => setShowSettings(false)}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-5">
                <div>
                  <Label className="text-gray-300 mb-2 block">Number of Stations</Label>
                  <Input
                    type="number"
                    min={1}
                    max={20}
                    value={tempSettings.totalStations}
                    onChange={(e) => setTempSettings({ ...tempSettings, totalStations: parseInt(e.target.value) || 1 })}
                    className="bg-white/10 border-white/20 text-white text-lg"
                  />
                </div>

                <div>
                  <Label className="text-amber-400 mb-2 block">1. Changeover Time (seconds)</Label>
                  <Input
                    type="number"
                    min={0}
                    max={600}
                    value={tempSettings.changeoverTime}
                    onChange={(e) => setTempSettings({ ...tempSettings, changeoverTime: parseInt(e.target.value) || 0 })}
                    className="bg-white/10 border-white/20 text-white text-lg"
                  />
                </div>

                <div>
                  <Label className="text-blue-400 mb-2 block">2. Reading Time (seconds)</Label>
                  <Input
                    type="number"
                    min={0}
                    max={600}
                    value={tempSettings.readingTime}
                    onChange={(e) => setTempSettings({ ...tempSettings, readingTime: parseInt(e.target.value) || 0 })}
                    className="bg-white/10 border-white/20 text-white text-lg"
                  />
                </div>

                <div>
                  <Label className="text-primary-light mb-2 block">3. Answer Time (seconds)</Label>
                  <Input
                    type="number"
                    min={0}
                    max={1200}
                    value={tempSettings.answerTime}
                    onChange={(e) => setTempSettings({ ...tempSettings, answerTime: parseInt(e.target.value) || 0 })}
                    className="bg-white/10 border-white/20 text-white text-lg"
                  />
                </div>

                <div>
                  <Label className="text-green-400 mb-2 block">4. Feedback Time (seconds)</Label>
                  <Input
                    type="number"
                    min={0}
                    max={600}
                    value={tempSettings.feedbackTime}
                    onChange={(e) => setTempSettings({ ...tempSettings, feedbackTime: parseInt(e.target.value) || 0 })}
                    className="bg-white/10 border-white/20 text-white text-lg"
                  />
                </div>

                <div className="pt-2 p-4 bg-white/5 rounded-xl">
                  <p className="text-gray-400 text-sm">
                    Total time per station:{" "}
                    <span className="text-white font-mono">
                      {formatTotalTime(tempSettings.changeoverTime + tempSettings.readingTime + tempSettings.answerTime + tempSettings.feedbackTime)}
                    </span>
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Total MMI duration:{" "}
                    <span className="text-white font-mono">
                      {formatTotalTime(tempSettings.totalStations * (tempSettings.changeoverTime + tempSettings.readingTime + tempSettings.answerTime + tempSettings.feedbackTime))}
                    </span>
                  </p>
                </div>

                <Button
                  onClick={handleSaveSettings}
                  className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary-dark hover:to-purple-600 text-white py-3 text-lg rounded-xl"
                >
                  Save & Reset Timer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
