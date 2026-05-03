import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Info, ExternalLink, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ELECTION_ESSENTIALS = [
  {
    title: "Register",
    desc: "First step is getting your name on the electoral roll by filling Form 6.",
    details: [
      { label: "Form Name", value: "Application for Registration of Voters (Form 6)" },
      { label: "Purpose", value: "To register as a new voter" },
      { label: "Where to get", value: "Electoral Registration Officer at your constituency office" },
      { label: "Online Link", value: "Election Commission of India - Form 6", link: "https://voters.eci.gov.in" },
      { label: "What you need", value: "Proof of citizenship, proof of address, proof of age, identity proof" },
      { label: "Processing Time", value: "Usually 7-10 days" }
    ]
  },
  {
    title: "Verify",
    desc: "Check your name in the voter list and secure your Voter ID (EPIC).",
    details: [
      { label: "What to verify", value: "Cross-check your name in the electoral roll" },
      { label: "Get your Voter ID", value: "Apply for EPIC (Elector's Photo Identity Card)" },
      { label: "Where to apply", value: "Electoral Registration Officer's office" },
      { label: "Online verification", value: "Election Commission of India - Voter Search", link: "https://electoralsearch.eci.gov.in/" },
      { label: "Benefits of Voter ID", value: "Proof of citizenship, used for voting, banking, and other official purposes" }
    ]
  },
  {
    title: "Vote",
    desc: "Find your polling booth and exercise your democratic right.",
    details: [
      { label: "Polling booth details", value: "Check your voter slip or visit ECI website" },
      { label: "What to bring", value: "Voter ID or any government-issued ID" },
      { label: "Voting hours", value: "Usually 7:00 AM to 6:00 PM (varies by state)" },
      { label: "Booth location finder", value: "Election Commission of India - Polling Station Search", link: "https://electoralsearch.eci.gov.in/" }
    ]
  }
];

const FAQS = [
  {
    q: "Q1: Who is eligible to vote in Indian elections?",
    a: "To be eligible to vote in India, you must:",
    details: [
      "Be a citizen of India",
      "Be at least 18 years old on the qualifying date",
      "Be a resident of the constituency for at least 6 months (for Lok Sabha and State Assembly elections)",
      "Not be disqualified under the Representation of the People Act, 1951",
      "Not be a non-resident Indian (NRI) for Lok Sabha elections, though you can vote in state elections if registered in that state"
    ],
    relatedLinks: [{ label: "Form 6 (Registration of New Voters)", url: "https://voters.eci.gov.in/" }]
  },
  {
    q: "Q2: How do I register to vote in India?",
    a: "Follow these steps:",
    details: [
      "Fill Form 6 (Application for Registration of Voters) or apply online",
      "Submit proof of citizenship (passport, Aadhaar, birth certificate, etc.)",
      "Submit proof of residence (utility bill, rental agreement, Aadhaar, etc.)",
      "Submit proof of age (birth certificate, school certificate, passport, etc.)",
      "Submit to your Electoral Registration Officer within 30 days of becoming eligible",
      "Your name will appear in the electoral roll after verification"
    ],
    relatedLinks: [{ label: "Online Registration", url: "https://www.eci.gov.in/voter-information" }, { label: "Form 6: New Voter Registration - Direct Link", url: "https://voters.eci.gov.in/" }]
  },
  {
    q: "Q3: What is a Voter ID (EPIC) and why do I need it?",
    a: "EPIC (Elector's Photo Identity Card) is an official photo identity card issued by the Election Commission of India.",
    details: [
      "Why you need it:",
      "Serves as proof of voter status",
      "Universally accepted government-issued ID",
      "Can be used for banking, insurance, and other official purposes",
      "Makes voting process smoother by quick identification at polling booth",
      "Valid for life (unless disqualified)",
      "",
      "How to apply:",
      "Available after your name appears in the electoral roll",
      "Apply using Form 7 at your Electoral Registration Officer's office",
      "Processing takes 10-15 days",
      "Available for free"
    ],
    relatedLinks: [{ label: "Form 7: Application for Issue/Correction of EPIC - Direct Link", url: "https://voters.eci.gov.in/" }]
  },
  {
    q: "Q4: How do I find my polling booth?",
    a: "You can find your polling booth through:",
    details: [
      "Voter Slip: Check your registered address - you'll receive a voter slip before elections",
      "ECI Website: Visit https://www.eci.gov.in/ and use the polling station locator",
      "Your Voter ID: Booth details are mentioned on your EPIC",
      "Official Election App: Download the Election Commission's official mobile app",
      "Contact Electoral Officer: Call or visit your constituency Electoral Registration Officer",
      "",
      "Information you'll need:",
      "Voter name",
      "Constituency name",
      "State name"
    ]
  },
  {
    q: "Q5: What documents do I need to bring while voting?",
    a: "You need to bring ONE valid government-issued photo ID:",
    details: [
      "Voter ID (EPIC) - Most common",
      "Aadhaar Card",
      "Passport",
      "PAN Card",
      "Driving License",
      "Service ID (for armed forces)",
      "Bank Passbook (with photo)",
      "Ration Card (with photo)",
      "",
      "Note: The Election Commission has allowed voting based on address declaration if you don't have ID, but carrying valid ID speeds up the process."
    ]
  },
  {
    q: "Q6: Can I vote if I've changed my address or name?",
    a: "Yes, you can update your voter registration. Use the following forms:",
    details: [
      "If your address changed:",
      "Form 8B: Application for Correction/Modification of Name or Address in the Electoral Roll",
      "Process: Submit at your new constituency's Electoral Registration Officer office",
      "Documents: New address proof + old voter ID/existing electoral roll evidence",
      "",
      "If your name changed:",
      "Form 8B: Same form for name corrections",
      "Documents: Name change certificate (marriage certificate, deed poll, etc.) + address proof"
    ],
    relatedLinks: [{ label: "Online correction", url: "https://www.eci.gov.in/voter-information" }, { label: "Form 8B: Application for Correction of Entries - Direct Link", url: "https://voters.eci.gov.in/" }]
  },
  {
    q: "Q7: What is the electoral roll and why is it important?",
    a: "The electoral roll is the official list of all registered voters in a constituency, prepared by the Election Commission of India.",
    details: [
      "Why it's important:",
      "Legal validity: Only those on the roll can vote",
      "Representation: Ensures accurate counting of eligible voters",
      "Transparency: Available for public inspection",
      "Verification: Helps prevent fraud and duplicate voting",
      "Delimitation: Used for determining constituency boundaries",
      "",
      "How to check the roll:",
      "Visit https://www.eci.gov.in/voter-information",
      "Search by name, constituency, or state",
      "Available online and at Electoral Registration Officer offices",
      "Usually updated annually and during special enrollment periods",
      "Published before every election",
      "",
      "Role of electoral roll:",
      "Ensures only eligible citizens vote",
      "Prevents multiple voting in same constituency",
      "Forms the basis for fair and transparent elections",
      "Can be challenged if errors are found"
    ]
  }
];

export function Home() {
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null);
  const [expandedEssential, setExpandedEssential] = React.useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
              Election Guide
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">
              Your Vote is Your <span className="text-blue-600">Voice.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about participating in the upcoming election. 
              Check your eligibility, find documents, and get ready to make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/eligible"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center group"
              >
                Am I Eligible?
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/docs"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300"
              >
                View Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Election Essentials</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ELECTION_ESSENTIALS.map((item, i) => {
              const Icon = [CheckCircle2, Info, HelpCircle][i];
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
                >
                  <Icon className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                  
                  <button 
                    onClick={() => setExpandedEssential(expandedEssential === i ? null : i)}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 mb-4"
                  >
                    {expandedEssential === i ? 'Show less' : 'Learn more'}
                  </button>
                  
                  {expandedEssential === i && (
                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="font-semibold text-gray-900 block">{detail.label}:</span>
                          {detail.link ? (
                            <a href={detail.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              {detail.value}
                            </a>
                          ) : (
                            <span className="text-gray-600">{detail.value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions - Elections in India</h2>
            <p className="text-gray-500">7 Frequently Asked Questions about Indian Elections.</p>
          </div>
          
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{faq.a}</p>
                
                <button 
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 mb-4"
                >
                  {expandedFAQ === i ? 'Show less' : 'Learn more'}
                </button>

                {expandedFAQ === i && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-600">
                      {faq.details.map((detail, idx) => (
                        detail === "" ? <br key={idx} /> : <li key={idx} className={detail.endsWith(':') ? 'font-semibold list-none -ml-5 mt-4' : ''}>{detail}</li>
                      ))}
                    </ul>
                    {faq.relatedLinks && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {faq.relatedLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                          >
                            {link.label}
                            <ExternalLink className="ml-1 w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
