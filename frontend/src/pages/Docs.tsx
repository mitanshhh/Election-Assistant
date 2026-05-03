import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Globe, ShieldCheck } from 'lucide-react';

const RESOURCES = [
  {
    category: "Quick Links for Indian Election Forms",
    items: [
      { name: "Form 6 - Application for Registration of New Voters", desc: "For new voters to register", url: "https://voters.eci.gov.in" },
      { name: "Form 7 - Application for Issue/Correction of EPIC (Voter ID)", desc: "For getting your Voter ID or correcting it", url: "https://voters.eci.gov.in" },
      { name: "Form 8 - Application for Deletion of Entries in Electoral Roll", desc: "To delete an entry from the roll", url: "https://voters.eci.gov.in" },
      { name: "Form 8A - Application for Correction of Entries in Electoral Roll", desc: "For correcting existing entries", url: "https://voters.eci.gov.in" },
      { name: "Form 8B - Application for Correction of Name or Address", desc: "To update your name or address", url: "https://voters.eci.gov.in" },
      { name: "Form 12D - Application for Postal Ballot", desc: "For eligible voters to vote by post", url: "https://voters.eci.gov.in" }
    ]
  },
  {
    category: "Important Contacts & Websites",
    items: [
      { name: "Election Commission of India (Main Website)", desc: "The official portal for ECI.", url: "https://www.eci.gov.in/" },
      { name: "Voter Information Portal", desc: "Check Electoral Roll & Find Polling Booth.", url: "https://www.eci.gov.in/voter-information" },
      { name: "Download Election Forms", desc: "All Forms Available Here.", url: "https://voters.eci.gov.in" },
      { name: "Find Your Electoral Registration Officer", desc: "State-wise Directory.", url: "https://electoralsearch.eci.gov.in/" },
      { name: "Election Commission of India - Contact Us", desc: "Get in touch with ECI.", url: "https://www.eci.gov.in/about-us/contact-us" },
      { name: "State Election Commissions Directory", desc: "Directory of state commissions.", url: "https://www.eci.gov.in/election-commission/about-us/state-election-commission" }
    ]
  },
  {
    category: "Important Links for Voters",
    items: [
      { name: "Check Your Voter Registration Status", desc: "Verify your registration details.", url: "https://www.eci.gov.in/voter-information" },
      { name: "Search Electoral Roll by Name", desc: "Find your name on the list.", url: "https://electoralsearch.eci.gov.in/" },
      { name: "Find Your Polling Station/Booth", desc: "Locate where to vote.", url: "https://electoralsearch.eci.gov.in/" },
      { name: "Download Election Apps", desc: "Official apps by ECI.", url: "https://www.eci.gov.in/" }
    ]
  },
  {
    category: "State-Wise Election Commission Websites",
    items: [
      { name: "Andhra Pradesh State Election Commission", desc: "State specific portal", url: "https://apec.gov.in/" },
      { name: "Arunachal Pradesh State Election Commission", desc: "State specific portal", url: "https://aprunachal.nic.in/" },
      { name: "Assam State Election Commission", desc: "State specific portal", url: "https://assamelection.nic.in/" },
      { name: "Bihar State Election Commission", desc: "State specific portal", url: "https://sec.bihar.gov.in/" },
      { name: "Chhattisgarh State Election Commission", desc: "State specific portal", url: "https://sec.cg.gov.in/" },
      { name: "Delhi Election Commission", desc: "State specific portal", url: "https://www.delectioncommission.nic.in/" },
      { name: "Goa State Election Commission", desc: "State specific portal", url: "https://goa.gov.in/election-commission/" },
      { name: "Gujarat State Election Commission", desc: "State specific portal", url: "https://gsec.gujarat.gov.in/" },
      { name: "Haryana State Election Commission", desc: "State specific portal", url: "https://haryana.gov.in/state-election-commission" },
      { name: "Himachal Pradesh State Election Commission", desc: "State specific portal", url: "https://hpsec.nic.in/" },
      { name: "Jharkhand State Election Commission", desc: "State specific portal", url: "https://sec.jharkhand.gov.in/" },
      { name: "Karnataka State Election Commission", desc: "State specific portal", url: "https://secekannataka.nic.in/" },
      { name: "Kerala State Election Commission", desc: "State specific portal", url: "https://sec.kerala.gov.in/" },
      { name: "Madhya Pradesh State Election Commission", desc: "State specific portal", url: "https://mpsec.nic.in/" },
      { name: "Maharashtra State Election Commission", desc: "State specific portal", url: "https://mahaseceioncommission.gov.in/" },
      { name: "Manipur State Election Commission", desc: "State specific portal", url: "https://manipurelectioncommission.nic.in/" },
      { name: "Meghalaya State Election Commission", desc: "State specific portal", url: "https://meg-sec.gov.in/" },
      { name: "Mizoram State Election Commission", desc: "State specific portal", url: "https://mizoram.gov.in/web/election-commission" },
      { name: "Nagaland State Election Commission", desc: "State specific portal", url: "https://nagaland.gov.in/" },
      { name: "Odisha State Election Commission", desc: "State specific portal", url: "https://sec.odisha.gov.in/" },
      { name: "Punjab State Election Commission", desc: "State specific portal", url: "https://punjab.gov.in/election" },
      { name: "Rajasthan State Election Commission", desc: "State specific portal", url: "https://sec.rajasthan.gov.in/" },
      { name: "Sikkim State Election Commission", desc: "State specific portal", url: "https://sikkim.gov.in/" },
      { name: "Tamil Nadu State Election Commission", desc: "State specific portal", url: "https://tnelectioncommission.nic.in/" },
      { name: "Telangana State Election Commission", desc: "State specific portal", url: "https://tnsec.telangana.gov.in/" },
      { name: "Tripura State Election Commission", desc: "State specific portal", url: "https://sec.tripura.gov.in/" },
      { name: "Uttar Pradesh State Election Commission", desc: "State specific portal", url: "https://sec.up.nic.in/" },
      { name: "Uttarakhand State Election Commission", desc: "State specific portal", url: "https://sec.uk.gov.in/" },
      { name: "West Bengal State Election Commission", desc: "State specific portal", url: "https://www.wbsec.gov.in/" }
    ]
  }
];

export function Docs() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-gray-900 mb-6"
          >
            Important Documents
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Access official portals, registration forms, and educational resources to ensure you're fully prepared.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-xl mx-auto relative"
          >
            <input
              type="text"
              placeholder="Search for forms, states, or portals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg text-gray-700 bg-white"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </motion.div>
        </div>

        <div className="space-y-16">
          {RESOURCES.map((section, idx) => {
            const filteredItems = section.items.filter(item => 
              item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              item.desc.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-bold text-gray-900 tracking-wide flex items-center">
                    <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
                    {section.category}
                  </h3>
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>
                
                {/* 3 columns grid for the items inside the category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, i) => (
                    <motion.a
                      whileHover={{ y: -5, scale: 1.02 }}
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 bg-white border border-gray-100 rounded-2xl shadow-md hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          <FileText className="w-6 h-6" />
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{item.name}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            );
          })}
          
          {/* Show a message if nothing matches the search */}
          {RESOURCES.every(section => 
            section.items.filter(item => 
              item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              item.desc.toLowerCase().includes(searchTerm.toLowerCase())
            ).length === 0
          ) && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-xl">No forms or links found for "{searchTerm}"</p>
            </div>
          )}
        </div>

        {/* Global Support Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-gray-900 to-blue-900 rounded-[3rem] p-12 text-center text-white overflow-hidden relative shadow-2xl"
        >
          <Globe className="absolute -top-12 -right-12 w-64 h-64 text-white/5 animate-spin-slow" />
          <ShieldCheck className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Need more help?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            If you're still unsure about your specific situation, contact the official National Voter Helpline at <span className="text-white font-bold bg-blue-600 px-2 py-1 rounded-md">1950</span>.
          </p>
          <a 
            href="https://electoralsearch.eci.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center space-x-2 px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1"
          >
            <span>Find Your Electoral Officer</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
