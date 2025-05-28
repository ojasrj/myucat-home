
const Index = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <header className="bg-white shadow relative">
        <div className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8 flex flex-col gap-4 items-start">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700 leading-tight">
                National Medical and Dental Society
              </h1>
              <p className="mt-1 text-sm sm:text-base text-gray-600">
                Fostering Excellence, Curiosity, and Collaboration
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <a 
                href="https://chat.whatsapp.com/F6JpDr5vRaVDTjdlHqq9ub" 
                target="_blank" 
                className="inline-block w-full sm:w-auto text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white font-bold px-4 sm:px-6 py-3 rounded-xl shadow hover:from-green-500 hover:via-blue-600 hover:to-purple-600 transition"
              >
                Join Now!
              </a>
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs sm:text-sm bg-yellow-100 border-l-4 border-yellow-400 p-3 sm:p-4 rounded shadow-sm text-gray-700">
              To participate in our activities or essay competition, you <strong>must be a member</strong> of one of our WhatsApp groups: <em>UCAT Experts</em> or <em>UCAT Experts v2</em>. Click the button above to join the official National Medical/Dental Society group and ensure you're part of our wider network.
            </p>
          </div>
        </div>
      </header>

      <main className="py-6 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">

          <section className="bg-white p-4 sm:p-6 rounded-2xl shadow border border-yellow-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-yellow-600">
              Essay Competition for Aspiring Medics/Dentists
            </h2>
            
            <p className="mt-2 text-sm sm:text-base text-gray-700">
              We are excited to launch our annual <strong>essay competition</strong> for aspiring medical and dental students. This is an opportunity to showcase your knowledge, critical thinking, and communication skills.
            </p>

            <div className="mt-4">
              <h3 className="text-base sm:text-lg font-semibold text-blue-500 mb-2">
                Essay Questions (choose one):
              </h3>
              
              {/* Mobile-friendly card layout for small screens */}
              <div className="block sm:hidden space-y-4">
                <div className="bg-white border border-gray-300 rounded-lg p-4">
                  <div className="font-semibold text-blue-600 mb-2">Question 1</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-green-600 text-sm">Medicine:</div>
                      <div className="text-sm text-gray-700">Choose an example of widely believed medical misinformation. Why does it spread, what is its impact, and how can it be addressed?</div>
                    </div>
                    <div>
                      <div className="font-medium text-purple-600 text-sm">Dentistry:</div>
                      <div className="text-sm text-gray-700">Choose an example of widely believed misinformation about oral health. Why does it spread, what is its impact, and how can it be addressed?</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                  <div className="font-semibold text-blue-600 mb-2">Question 2</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-green-600 text-sm">Medicine:</div>
                      <div className="text-sm text-gray-700">Is overdiagnosis a greater challenge than underdiagnosis in modern medical practice? Discuss with reference to current practices and consequences.</div>
                    </div>
                    <div>
                      <div className="font-medium text-purple-600 text-sm">Dentistry:</div>
                      <div className="text-sm text-gray-700">Is overdiagnosis a greater challenge than underdiagnosis in modern dental practice? Discuss with reference to current practices and consequences.</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-4">
                  <div className="font-semibold text-blue-600 mb-2">Question 3</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-green-600 text-sm">Medicine:</div>
                      <div className="text-sm text-gray-700">Why is personalised medicine important, and what are its potential implications for the future of healthcare?</div>
                    </div>
                    <div>
                      <div className="font-medium text-purple-600 text-sm">Dentistry:</div>
                      <div className="text-sm text-gray-700">Why is the personalisation of dental healthcare important, and what are its potential implications for the future of healthcare?</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                  <div className="font-semibold text-blue-600 mb-2">Question 4</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-green-600 text-sm">Medicine:</div>
                      <div className="text-sm text-gray-700">What do you consider to be the most important unsolved question in medicine right now, and why?</div>
                    </div>
                    <div>
                      <div className="font-medium text-purple-600 text-sm">Dentistry:</div>
                      <div className="text-sm text-gray-700">What do you consider to be the most important unsolved question in dentistry right now, and why?</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table layout for larger screens */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300 text-left text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 border border-gray-300 w-12">Q</th>
                      <th className="px-2 sm:px-4 py-2 border border-gray-300">Medicine</th>
                      <th className="px-2 sm:px-4 py-2 border border-gray-300">Dentistry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-2 sm:px-4 py-2 border border-gray-300 font-medium">1</td>
                      <td className="px-2 sm:px-4 py-2 border border-gray-300">Choose an example of widely believed medical misinformation. Why does it spread, what is its impact, and how can it be addressed?</td>
                      <td className="px-2 sm:px-4 py-2 border border-gray-300">Choose an example of widely believed misinformation about oral health. Why does it spread, what is its impact, and how can it be addressed?</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-2 sm:px-4 py-2 border border-gray-300 font-medium">2</td>
                      <td className="px-2 sm:px-4 py-2 border border-gray-300">Is overdiagnosis a greater challenge than underdiagnosis in modern medical practice? Discuss with reference to current practices and consequences.</td>
                      <td className="px-2 sm:px-4 py-2 border border-gray-300">Is overdiagnosis a greater challenge than underdiagnosis in modern dental practice? Discuss with reference to current practices and consequences.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-2 sm:px-4 py-2 border border-gray-300 font-medium">3</td>
                      <td className="px-2 sm:px-4 py-2 border border-gray-300">Why is personalised medicine important, and what are its potential implications for the future of healthcare?</td>
                      <td className="px-2 sm:px-4 py-2 border border-gray-300">Why is the personalisation of dental healthcare important, and what are its potential implications for the future of healthcare?</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-2 sm:px-4 py-2 border border-gray-300 font-medium">4</td>
                      <td className="px-2 sm:px-4 py-2 border border-gray-300">What do you consider to be the most important unsolved question in medicine right now, and why?</td>
                      <td className="px-2 sm:px-4 py-2 border border-gray-300">What do you consider to be the most important unsolved question in dentistry right now, and why?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <a 
                href="https://forms.gle/YA9h3YT9Q61CHgRs9" 
                target="_blank" 
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg text-lg sm:text-xl hover:from-purple-600 hover:to-pink-600 transition duration-300"
              >
                📄 Submit Your Essay
              </a>
            </div>

            <div className="mt-6">
              <h3 className="text-base sm:text-lg font-semibold text-blue-500">Prizes</h3>
              <p className="text-sm sm:text-base text-gray-700 mt-2">
                <strong>🏆 Grand Prize (overall winner):</strong> Set yourself up for success with <em>complete, complimentary</em> access to all of MyUCAT's flagship group programmes - together worth £1100. This includes:
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li><a href="https://learn.myucat.co.uk/summer-programme" className="text-blue-600 underline" target="_blank">MyUCAT Summer Programme</a> – 2-months of 1-1 and small group mentorship exploring UCAT mastery, personal statement writing, and an introduction to interview strategy (RRP £350). </li>
                  <li><a href="https://learn.myucat.co.uk/medical-interview-programme" className="text-blue-600 underline" target="_blank">MyUCAT Interview Programme</a> – 3 months of intensive prep with 24 expert-led sessions and small group, university-specific interview practice (RRP ~£450).</li>
                  <li><a href="https://learn.myucat.co.uk/a-level-tuition" className="text-blue-600 underline" target="_blank">MyUCAT A Level Programme</a> - 12 weeks of guided tutoring in A level biology, chemistry, and mathematics (RRP £300).</li>
                  <li><a href="https://learn.myucat.co.uk/strategic-applications" className="text-blue-600 underline" target="_blank">Strategic Application Consultation</a> - bespoke consultation pre-UCAS deadline to finalise 4 strategic medical/dental school choices</li>
                </ul>
                Already purchased one? You'll be reimbursed up to the full £1100 value.
              </p>

              <p className="mt-4 text-sm sm:text-base text-gray-700">
                <strong>🥈 Runners-Up (one for each remaining category):</strong> 1 hour 1-1 UCAT lesson with Ojas + a £25 Amazon voucher.
              </p>

              <p className="mt-4 text-sm sm:text-base text-gray-700">
                <strong>🌟 Honours:</strong> All winners will be published in the National MedSoc/DentSoc Journal. Finalists placing in the top 10% will also receive a formal Certificate of Distinction.
              </p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-base sm:text-lg font-semibold text-blue-500">Why Participate?</h3>
              <p className="text-sm sm:text-base text-gray-700 mt-2">Besides the prizes, these essays are designed to help you develop insights and arguments that are perfect for discussion at interviews and personal statement material.</p>
              <p className="mt-2 text-sm sm:text-base">If you <strong>win</strong>, you can reference your <em>"prize-winning essay on..."</em> and talk about your reflections on the topic, the process of writing, and what you learned.</p>
              <p className="mt-2 text-sm sm:text-base">If you <strong>don't win</strong>, you still gain a valuable piece of independent academic work. You can reference it as an <em>"independent research project on..."</em> and show initiative, academic maturity, and curiosity by discussing your specific findings and how the topic inspired or deepened your interest in medicine or dentistry.</p>
            </div>

            <div className="mt-4">
              <h3 className="text-base sm:text-lg font-semibold text-blue-500">Judging Criteria:</h3>
              <p className="text-sm sm:text-base text-gray-700 mt-2">We would be looking for:</p>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 mt-2 space-y-2 ml-4">
                <li><strong>Relevance:</strong> Highly relevant answers that are well-focused, with a clear central argument and appropriately broad or narrow scope for the length of the essay.</li>
                <li><strong>Depth of Understanding:</strong> Essays should show deep understanding of the topic, including use of accurate scientific or clinical terminology, awareness of uncertainties, and reference to ongoing debates or differing perspectives where appropriate.</li>
                <li><strong>Evidence and Research:</strong> Essays should be backed by reliable factual information and evidence, with appropriate references. The ability to evaluate sources and make balanced use of evidence is important.</li>
                <li><strong>Structure and Logic:</strong> Points should be clearly organised in a logical order, with effective transitions and a well-structured overall argument.</li>
                <li><strong>Independent Thinking and Flair:</strong> We will reward creativity, original thought, and critical reflection.</li>
              </ul>

              <p className="mt-4 text-sm sm:text-base">Any and all use of AI must be disclosed. Essays deemed to be AI generated where this is not disclosed will be automatically disqualified. Essays making heavy use of AI may be viewed less favourably, particularly where the submitted work is wholly AI-generated and does not reflect original thought. Where disclosed, appropriate usage of AI e.g. in data analysis/diagram generation will not be penalised.</p>
            </div>

            <div className="mt-4 text-sm sm:text-base text-gray-700 space-y-2">
              <p><strong>Who can enter?</strong> Any student considering medicine or dentistry. The competition is targeted at students applying for undergraduate or graduate medicine/dentistry courses in the October 2025 UCAS cycle, although students younger than this are welcome to apply. </p>
              <p><strong>Word Count:</strong> 1000–1500 words (±10%). Subtitles and in-line references count. The title and bibliography do <em>not</em> count towards the word limit.</p>
              <p><strong>Deadline:</strong> Essays must be submitted by <strong>11:59 PM on June 22nd</strong>. No late submissions will be accepted.</p>
              <p><strong>Submission:</strong> Upload your essay in Word document format directly through this website.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">What is this society?</h2>
            <p className="text-sm sm:text-base text-gray-700">The National Medical and Dental Society (NMDS) is the widening access wing of MyUCAT. We deliver free supercurricular events and champion <strong>learning for learning's sake</strong> - encouraging inquisitive minds to explore beyond the curriculum. We believe in creating a thriving community for students passionate about medicine and dentistry, where intellectual curiosity is valued as much as achievement.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">What do you offer?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
                <h3 className="text-lg sm:text-xl font-bold text-blue-500">Work Experience Events</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">We connect members with exclusive work experience opportunities.</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
                <h3 className="text-lg sm:text-xl font-bold text-blue-500">Supercurricular Talks & Meetings</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">Regular talks by professionals, academics, and student-led presentations that go beyond the classroom and delve into current medical and dental issues.</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
                <h3 className="text-lg sm:text-xl font-bold text-blue-500">Competitions</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">From essay prizes to clinical case analysis challenges, we provide a platform to test your skills and stand out.</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
                <h3 className="text-lg sm:text-xl font-bold text-blue-500">Presenting Opportunities</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">Students can present their research and wider reading, at our national events and forums, developing communication skills and public speaking experience.</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow lg:col-span-2">
                <h3 className="text-lg sm:text-xl font-bold text-blue-500">Leadership Roles</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">Members can apply for national committee roles or lead affiliated societies at their own school - developing key skills in organisation, communication, and teamwork.</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-xs sm:text-sm">
          &copy; 2025 MyUCAT. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
