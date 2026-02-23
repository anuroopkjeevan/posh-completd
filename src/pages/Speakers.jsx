import React, { useState } from 'react';
import {
  ShieldCheck,
  Mail,
  Linkedin,
  User,
  FileText,
} from 'lucide-react';

// Asset Imports
import promo from '../assets/sankalpog.jpeg';
import rahul from '../assets/rahuloak.jpeg';
import amla from '../assets/amlaboara.jpeg';
import surendran from '../assets/surendran.jpeg';
import puvan from '../assets/puvanesan.jpeg';
import rajesh from '../assets/Rajesh Photo.jpg.jpeg';
import pmanoj from '../assets/pmanoj.jpeg';

// ===================== SpeakerCard Component =====================
const SpeakerCard = ({
  name,
  title,
  description,
  imageSrc,
  email,
  linkedin,
}) => {
  const [isPrintingThis, setIsPrintingThis] = useState(false);

  // Split title: Check if first part is "Moderator"
  const titleParts = title.split('|').map(part => part.trim());
  const isModerator = titleParts[0].toLowerCase() === 'moderator';
  
  const mainRole = isModerator ? titleParts[0] : null;
  const subRoles = isModerator ? titleParts.slice(1).join(' | ') : title;

  const handlePrint = () => {
    setIsPrintingThis(true);
    // Timeout ensures React state updates the DOM before the print dialog opens
    setTimeout(() => {
      window.print();
      setIsPrintingThis(false);
    }, 150);
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full 
      ${isPrintingThis ? 'print-active-card' : 'print:hidden'}`}
    >
      {/* Header Section */}
      <div className="p-8 pb-4 border-b border-gray-100 flex flex-col items-center print:border-none print:pb-0 print:items-start print:block">
        
        {/* Profile Image - Hidden in PDF */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-white border-4 border-white shadow-md print:hidden flex items-center justify-center">
          {imageSrc ? (
            <img src={imageSrc} alt={name} className="max-w-full max-h-full object-contain" />
          ) : (
            <User className="w-12 h-12 text-gray-500" />
          )}
        </div>

        {/* Name */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center min-h-[3.5rem] flex items-center print:text-left print:min-h-0 print:text-3xl print:mb-3 print:block">
          {name}
        </h3>

        {/* Unified Title Colors - Both Moderator and Sub-titles are Blue on Web, Black on PDF */}
        <div className="text-center print:text-left">
          {mainRole && (
            <p className="text-lg font-bold text-blue-600 uppercase tracking-wider mb-1 print:text-black print:text-xl">
              {mainRole}
            </p>
          )}
          <p className="text-md font-semibold text-blue-600 print:text-black print:text-lg print:mt-1">
            {subRoles}
          </p>
        </div>
      </div>

      {/* Description & Buttons Area */}
      <div className="p-8 flex-grow flex flex-col print:p-0 print:mt-8 print:block">
        
        {/* PDF ONLY Description - Visible in PDF, Hidden on Web */}
        <p className="hidden print:block text-black text-[11pt] leading-relaxed text-justify whitespace-pre-wrap">
          {description}
        </p>

        {/* Web View: Footer Actions (Description is completely omitted here) */}
        <div className="mt-auto print:hidden">
          <button
            onClick={handlePrint}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-50 text-blue-700 font-bold rounded-lg hover:bg-blue-100 transition mb-6"
          >
            <FileText className="w-4 h-4" />
            Download Bio (PDF)
          </button>

          {(email || linkedin) && (
            <div className="flex justify-center gap-6 pt-4 border-t border-gray-50">
              {email && (
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ===================== Speakers Page Component =====================
const Speakers = () => {
  const speakers = [
    {
      name: "Capt. (Dr.) Sankalp Shukla",
      title: "Managing Director – Bernhard Schulte Shipmanagement (India) Pvt. Ltd.",
      description: `Capt. Sankalp Shukla joined BSM, formerly known as Eurasia, in 1995. He began his journey as a Deck Cadet and served on various types of vessels until attaining command in 2007. Following this, he joined BSM’s Chennai office as Fleet Personnel Manager in September 2008. He later took a sabbatical to pursue an MSc in Shipping, Logistics and Supply Chain Management from the University of Plymouth, United Kingdom. Thereafter, he rejoined BSM in 2009 as a Marine Superintendent and was promoted in 2010 to the rank of Crew Manager, additionally shouldering responsibilities for business development. In December 2012, he was promoted to Deputy Director of BSM Crew Service Centre India, followed by his appointment as Director in December 2014 and subsequently as Managing Director in 2020. During his tenure, there was a substantial increase in the number of Indian seafarers serving on ships managed by the company. Overall, he has completed over 30 years with the BSM Group and continues to contribute actively to its growth. Capt. Shukla also serves as Chairman of the Foreign Owners’ Representatives and Ship Managers Association (FOSMA), Court Member of the Indian Maritime University (IMU), Trustee at NUSI ITF Trust and Maritime Floating Staff Welfare Trust (MFSWT), and General Secretary of the Maritime Awareness Program Society (MAPS). He has been conferred the prestigious Honorary Doctorate (Honoris Causa) by AMET University (Academy of Maritime Education and Training), India. The honorary degree was bestowed by Shri K. Ramachandran, Chancellor, during the institution's 32nd-year celebrations at a convocation ceremony held in Chennai on 28 January 2026.`,
      imageSrc: promo,
    },
    {
      name: "Rajesh Menon",
      title: "Moderator | Associate Director (SME–Maritime) | Department of Promotion of Industry and Internal Trade | Ministry of Commerce & Industry",
      description: `Rajesh Menon is a senior technocrat and maritime policy expert with nearly three decades of experience in infrastructure development, including over twenty years across ports, shipping, logistics, and multimodal transportation. His career uniquely spans government, large corporate groups, and academia, giving him a rare ability to bridge policy intent with commercial execution. He has held senior leadership roles within the Government of India, contributing to national initiatives such as PM GatiShakti, Sagarmala, the National Logistics Policy, and the Indian Ports legislative framework. As a maritime subject-matter expert, he has evaluated and advised on complex infrastructure projects, developed integrated port connectivity and logistics strategies, and supported evidence-based policymaking at the highest levels of government. In the private sector, Rajesh spent over a decade with the Adani Group and led strategic business development initiatives at major ports, managing large teams, negotiating high-value projects, and engaging closely with regulators, investors, and CXO leadership. Beyond executive roles, Rajesh is an active consultant, author, and visiting faculty member at premier institutions.`,
      imageSrc: rajesh,
    },
{
  name: "P Manoj",
  title: "Moderator | P Manoj Editor (Shipping) - ET Infra",
  description: `P Manoj is an accomplished maritime journalist with nearly three decades of experience covering India's shipping, ports, logistics, and maritime policy landscape. He currently serves as Editor – Shipping at ET Infra, the infrastructure-focused digital platform of The Economic Times, based in Mumbai, a role he has held since April 2022.

Widely respected for his deep domain expertise, Manoj has consistently delivered authoritative reporting and sharp analysis on container shipping, shipbuilding, port development, coastal logistics, and regulatory reforms shaping India's maritime ecosystem.

Prior to joining ET Infra, he was Senior Deputy Editor at The Hindu BusinessLine (2017–2022), where he played a key role in maritime and infrastructure coverage.

Manoj was a part of the team that launched the MINT newspaper where he spent a decade reporting on shipping and logistic sectors. During his stint, Manoj also wrote a weekly shipping column named 'ALL ABOVE BOARD', first for the main paper, and then for Mint Asia, a weekly newspaper published by the MINT in Singapore.

Manoj continues to shape industry discourse through insightful reporting and policy analysis. His perspectives are widely followed across India's maritime and infrastructure sectors, making him a valued contributor to conversations on the future of shipping and port-led development.`,
  imageSrc: pmanoj,
},
      {
      name: "Datuk Capt. Surendran Menon",
      title: "Master Mariner | Port, Maritime & Infrastructure Leader | Technopreneur & Entrepreneur",
      description: `DATUK CAPT. SURENDRAN MENON, D.P.S.M., MSc, FCILT
Master Mariner | Port, Maritime & Infrastructure Leader | Technopreneur & Entrepreneur

Datuk Capt. Surendran Menon is a highly experienced business leader, entrepreneur, and maritime professional with over four decades of progressive experience spanning the Merchant Navy, Port and Terminal operations, Maritime Logistics, shipyard environments, bulk material handling systems, infrastructure development, and the integration of digital and technology-driven solutions to enhance operational efficiency and governance across Malaysia and the region.
In the early part of his career, Datuk Capt. Surendran served with Neptune Orient Lines (NOL), Singapore, and qualified as a Master Mariner (Foreign Going) at a very young age. During this period, he served on several merchant ships including crude oil tankers and Panamax dry bulk carriers, developing extensive hands-on expertise in ship operations, navigation, maritime safety, cargo handling, port regulations, and marine compliance. This seafaring foundation established his strong ability to bridge ship-side operational realities with shore-based port, terminal, and infrastructure operations.
Subsequently he was selected as part of the Petronas Carigali start-up team to develop the Dulang Oilfield with a purpose built FSO Puteri Dulang which he went to complete and commission the Dulang Offshore Marine Terminal. This role provided direct exposure to offshore-to-shore operational interfaces, marine coordination, safety-critical environments, and hydrocarbon logistics, further strengthening his practical grounding in Malaysia’s energy, maritime, and offshore operations sector. This was followed by his involvement in the support services of Jardines Shipping Agency which was one of the foremost shipping agencies in Asia at that time. This experience allowed him to complete his maritime exposure as it encompassed the whole magnitude of maritime logistics prior to venturing as an entrepreneur. 
Datuk Capt. Surendran is strongly driven to leverage digital systems, automation, data platforms, and smart technologies through ARA TechBis Sdn Bhd to enhance operational efficiency, safety, sustainability, and data-driven decision-making within Malaysia’s port, maritime, and logistics ecosystems, complementing physical port and infrastructure development. Since then, he has established different streams of business which includes a Engineering, Procurement and Construction company and in recent times a healthcare venture. 

His experiences as a serial entrepreneur include amongst others the development of the following organization and projects.
Leadership & Business Roles
Founder & Managing Director – Mutiara Etnik Sdn Bhd
(ISO 9001:2015 Certified | CIDB Grade G7)
• Engineering, civil construction, port-side infrastructure, bulk material handling systems, ship loaders, conveyors, and EPCC execution for ports, terminals, and industrial facilities.


Founder & Director – ARA TechBis Sdn Bhd
(ISO 9001:2015 Certified | CIDB Grade G7)
• Technology and engineering solutions company delivering digital systems, automation, software, smart technologies, and infrastructure-related solutions to multiple industries, including ports, maritime, logistics, transport, healthcare, and industrial sectors.
Selected Port & Maritime Project Experience
Westports (M) Sdn Bhd – Dry Bulk Terminal 2 (DBT 2)
Mechanical and electrical rectification, testing, and commissioning of critical ship-to-shore wharf conveyor and transfer tower systems at an active dry bulk berth, restoring berth-level bulk handling capability, safe cargo flow, and continuous port operations for slag and fertilizer cargo.
Malayan Flour Mills Berhad – Batu Undan, Lumut (with Cargotec Terminal Solutions (M) Sdn Bhd)
Refurbishment of mechanical and pneumatic ship unloaders forming the primary vessel discharge interface, supporting continuous port discharge operations, berth productivity, and safe bulk cargo handling within an active port environment.
Lekir Bulk Terminal Sdn Bhd – Material Handling System LBT 1/2012 (Package 1)
Engineering, procurement, construction, and commissioning of a Grab Type Ship Unloader (SUL3) with 82-ton hook capacity, designed to unload bulk cargo from 25,000 DWT to 400,000 DWT vessels. The system enabled seaward and landward unloading, discharging onto multiple wharf conveyors via rotating conveyor systems—demonstrating full ship-to-shore integration, berth operations optimisation, and high-capacity port bulk handling.
Malaysia Marine and Heavy Engineering Sdn Bhd (MMHE)
Port, Shipyard & Marine Operations Exposure
Involved in hull fitting and steel works, vessel engineering, marine repairs, and yard construction across a wide range of vessel types, including LNG and LPG vessels, within a major shipyard and port operating environment, supporting marine construction, maintenance, and shipyard-based port operations in live and safety-critical settings.

Terengganu Silica Consortium Sdn Bhd – Setiu Plant, Terengganu
Port & Jetty Ship Loading Operations | Shiploader Conveyor (SLC) Refurbishment
Consultation, rectification, and refurbishment of shiploader conveyor systems supporting port-side ship loading operations at the Setiu jetty. Works were executed within a live jetty and marine operating environment, including engineering assessment, temporary support fabrication, dismantling and refurbishment of BC2 & BC3 gantries and A-frame structures, marine transportation by barge, jetty-side installation, testing, and commissioning.
The ship loading system was fully restored efficiently achieving luffing up to approximately 8 metres and boom/shuttling extension up to 27 metres, reinstating full port-side bulk ship loading capability, berth readiness, and operational continuity.

Professional Standing & Recognition

Master Mariner (Foreign Going)
Master of Science in Transport Planning
Fellow – Chartered Institute of Logistics & Transport (FCILT)
Life Member of Malaysian Institute of Maritime


Member of Malaysian Institute of Management


Darjah Pangkuan Seri Melaka (D.P.S.M.), conferred in 2020, carrying the title Datuk

Social/Voluntary Activities;
Immediate Past Chairman   -   Malaysian Inclusive Entrepreneurs Cooperative
President                 -   AMMA Foundation
Secretary                 -   Malaysia India Business Council
Vice President                -   Old Lasallian Association Klang
Advisor     - Asean India Business Council.`,
      imageSrc: surendran,
    },
    {
      name: "Datuk Puvanesan Subenthiran",
      title: "Group CEO & MD | Privasia Group",
      description: `Datuk Puvanesan A/L Subenthiran is one of the founding members of PRIVASIA and was appointed as the Group Chief Executive Officer (GCEO) and Managing Director of PRIVASIA Group on 4 May 2009. Prior to this, Datuk Puvanesan was a senior in the Business Advisory and Assurance Department of BDO Simpsons Xavier in Ireland. Upon returning to Malaysia, he held the position of Chief Financial Officer of the Makmal Jaya Group. Since November 2024, he has been serving as an Executive Director of NexG Berhad and was re-appointed as an Investment Panel Member of the Human Resource Development Corporation in March 2025. He also holds directorships in several private limited companies incorporated in Malaysia.`,
      imageSrc: puvan,
    },
    {
      name: "Amlan Bora",
      title: "Chief Representative | Port of Rotterdam Authority",
      description: `Amlan Bora is an experienced global supply chain professional who has worked with major multinational organizations such as Siemens, Philips, and Diageo in progressively senior leadership roles. Prior to his current position, he served as the Chief Representative and Trade & Investment Commissioner of the Netherlands Business Support Offices (NBSO) in India. The NBSOs are trade offices managed by the Ministry of Economic Affairs of the Dutch Government, supporting bilateral trade and investment between the Netherlands and India. Having spent many years in India, Amlan is deeply connected to and committed to the country’s development. He serves as an advisor to several non-profit organizations in India and abroad.`,
      imageSrc: amla,
    },
    {
      name: "Rahul Oak",
      title: "Head of Energy Projects | Torm Shipping India Pvt Ltd",
      description: `Rahul Oak is a passionate maritime professional with more than 24 years of ship handling experience across various capacities and roles. He began his maritime journey in the millennium year 2000 as a Sailing Engineer Officer on SCI tanker ships. When he stepped ashore in 2012 to join Torm Shipping India as a Technical Superintendent, he had already sailed for several years as a Chief Engineer, gaining wide experience in most aspects of shipping operations. Based primarily in Mumbai, he acquired extensive knowledge in shipboard operations, technical ship management, risk management, and crew handling. As Head of Energy Projects at TORM for more than 3.5 years, he has actively contributed to reducing TORM’s CO₂ footprint by implementing various energy-saving projects onboard TORM vessels.`,
      imageSrc: rahul,
    },
  
  ];

  return (
    <>
      <style>
        {`
          @media print {
            @page { 
              size: A4; 
              margin: 20mm 15mm; 
            }
            
            /* Basic resets to ensure background/colors print correctly */
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }

            /* Hide everything on the page by default */
            body * { visibility: hidden; height: 0; overflow: visible; }
            
            /* Enable only the printing card */
            .print-active-card, 
            .print-active-card * { 
              visibility: visible; 
              height: auto !important;
            }

            /* Positioning for the PDF page */
            .print-active-card {
              position: relative !important;
              display: block !important;
              width: 100% !important;
              border: none !important;
              box-shadow: none !important;
              background: transparent !important;
              padding: 0 !important;
              margin: 0 !important;
            }

            /* Ensure long text wraps and flows to next pages */
            p {
              orphans: 3;
              widows: 3;
              page-break-inside: auto;
            }

            .print\\:hidden { display: none !important; }
          }
        `}
      </style>
      <div className="bg-gray-50 min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-4 rounded-full bg-blue-600 text-white shadow-lg">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Speakers
              </h1>
            </div>
            <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;