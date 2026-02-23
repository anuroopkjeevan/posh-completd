import React, { useState } from 'react';
import { 
  Target, Award, Building2, History, Globe, User, 
  Milestone, ShieldCheck, Mail, Linkedin, FileText 
} from 'lucide-react';

// --- Assets ---
import promo from '../assets/jayakumar.png';
import joeImg from '../assets/advisory.png';
import sankImg from '../assets/vivekseth.png';
import jamilImg from '../assets/mrjamil.jpeg';
import raviImg from '../assets/ravimehothra.jpeg';
import rajesh from '../assets/Rajesh Photo.jpg.jpeg';


/**
 * ProfileCard Component
 */
const ProfileCard = ({ name, title, description, imageSrc, email, linkedin }) => {
  const [isPrintingThis, setIsPrintingThis] = useState(false);

  const handleDownload = () => {
    setIsPrintingThis(true);
    setTimeout(() => {
      window.print();
      setIsPrintingThis(false);
    }, 300);
  };

  return (
    <div className={`bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full 
      ${isPrintingThis ? 'print-active-card' : 'print:hidden'}`}>
      
      <div className="p-8 pb-4 flex flex-col items-center print:border-none print:items-start print:p-0 print:mb-4">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 bg-gray-50 flex items-center justify-center border-4 border-white shadow-md ring-1 ring-gray-100 print:hidden">
          {imageSrc ? (
            <img src={imageSrc} alt={name} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <User className="w-10 h-10 text-gray-400" />
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1 text-center min-h-[3rem] flex items-center print:text-3xl print:text-left print:min-h-0 print:mb-1">
          {name}
        </h3>
        <p className="text-sm font-semibold text-blue-600 text-center print:text-left print:text-blue-800 print:text-lg">
          {title}
        </p>
      </div>

      <div className="px-6 pb-6 flex-grow flex flex-col print:p-0">
        <div className="hidden print:block bio-content text-gray-800 text-justify space-y-4 print:text-[11pt] print:leading-relaxed">
          {description.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <button
          onClick={handleDownload}
          className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-50 text-blue-700 font-bold rounded-lg hover:bg-blue-100 transition print:hidden"
        >
          <FileText className="w-4 h-4" />
          Download Full Bio (PDF)
        </button>

        {(email || linkedin) && (
          <div className="mt-4 flex justify-center gap-6 pt-4 border-t border-gray-50 print:hidden">
            {email && (
              <a href={`mailto:${email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const About = () => {
 const boardMembers = [
    {
      name: "DR  JAYAKUMAR",
      title: "HONORARY CHAIRMAN | MARPORTS GLOBAL CONFERENCE & AWARDS",
      description: "Dr. Jayakumar's landmark achievement is spearheading the Vizhinjam International Seaport—the nation's first deep-water container transshipment hub near Thiruvananthapuram. As Founder CEO and Managing Director of Vizhinjam International Seaport Limited, he drove its conceptualization, planning, design, structuring, and execution, culminating in its commissioning in 2024.\n\nHis journey with Vizhinjam began in 2001 as Special Private Secretary to Kerala's Minister for Ports, building on prior expertise as Technical Adviser of Westport Malaysia in the development of transshipment and bulk terminals.\n\nA top-ranking Civil Engineering graduate from College of Engineering Thiruvananthapuram, Dr Jayakumar earned an MTech and PhD in Ocean Engineering from IIT Madras. Today, Dr. Jayakumar serves as the Principal Advisor at ULCCS, the world's largest cooperative, on infrastructure projects.",
      imageSrc: promo,
    },
{
  name: "DR. RAVI KUMAR MEHROTRA CBE",
  title: "Founder, Promoter & Executive Chairman – Foresight Group",
  description: `Dr. Ravi Kumar Mehrotra CBE is the Founder and Executive Chairman of the Foresight Group (Foresight Global Pte. Ltd., Singapore). A marine engineer by profession, he began his career in 1964 with the Shipping Corporation of India, rising to the rank of Chief Engineer. He was later seconded as Managing Director for the company’s international joint ventures, where he developed the global relationships that enabled him to establish the Foresight Group in 1984.

Over the decades, he has carefully guided the Group into diversified sectors including drilling, shipping, ports, gas infrastructure, retail, hospitality, and not-for-profit maritime training. His leadership philosophy is rooted in long-term sustainability, with a vision for the Group to celebrate its centenary in 2084 with strong financial health and continued relevance to society.

Dr. Ravi received the Honorary Commander of the Order of the British Empire (CBE) from Her Majesty Queen Elizabeth II. He serves as Chairman of the European India Chamber of Commerce (EICC), headquartered in Brussels, and has held several prestigious honorary positions, including Director of the Commonwealth Business Council. 

He has served as a board member of Lloyd’s Register and is a recipient of the Lloyd’s List and Seatrade Lifetime Achievement Award for his contribution to the offshore and maritime industry. He has also been conferred an Honorary Industrial Doctorate from Aries International Maritime Research Institute (Dubai, UAE) and, in 2021, received the Doctor of Science (Honoris Causa) from Royal Holloway, University of London.

Dr. Ravi holds the Freedom of the City of London and continues to serve as visiting faculty at the Cambridge Academy of Transport. A noted international speaker, entrepreneur, and philanthropist, he remains actively engaged in advancing global maritime and business leadership.`,
  imageSrc: raviImg,
},
{
  name: "JOE BRINCAT",
  title: "Advisory Board Member | Maritime & Offshore Industry Veteran",
  description: `Joe Brincat is a distinguished maritime and offshore industry veteran with over four decades of global experience spanning ship repair, classification, offshore construction, and regional leadership.

He previously served as Vice President – Middle East Region at ABS, overseeing operations across 18 countries and playing a pivotal role in positioning ABS as the classification society of choice for offshore and tanker markets.

Throughout his career, he has led landmark projects including FPSO conversions, jack-up drilling units, semi-submersibles, spars, and wind farm installation vessels—many of which were regional firsts.

Joe was instrumental in establishing the ABS Middle East Engineering Office and the Regional Advisory Technical Committee, strengthening technical governance and industry collaboration.

His strategic insight, technical depth, and governance experience make him a valued advisor to boards and institutions shaping the future of the maritime and offshore sectors.`,
  imageSrc: joeImg,
}
,
  {
  name: "MR. JAMIL AL ALI",
  title: "Regional Commercial & Business Development Director | Bureau Veritas",
  description: `Mr. Jamil Al Ali graduated in 1990 as a Marine Engineer from South Tyneside College, UK, after completing his engineering cadetship sponsored by Kuwait Oil Tanker Company (KOTC). He sailed onboard various classes of vessels within the KOTC fleet, including product tankers, VLCCs, and gas carriers, rising through the ranks to Chief Engineer before joining the KOTC Head Office as a Technical Superintendent in 2002.

He subsequently held several senior managerial positions at KOTC, ranging from Fleet Engineering Group Manager to Head of the Fleet New Building Group. Over the course of his distinguished career, he developed extensive expertise in tanker and gas carrier segments.

Mr. Al Ali was widely recognized for his key role in maintaining the KOTC fleet to the highest international industry standards and received prestigious industry accolades, including recognition associated with Tanker Operator of the Year.

He has also led the Kuwait delegation at the IMO Marine Environment Protection Committee (MEPC) meetings in London and represented Kuwait at COP23 – Shipping Initiative in Bonn, Germany.

After a highly successful 30-year career at KOTC, Mr. Jamil Al Ali was appointed as Head of Regional Commercial & Business Development for the Middle East Region within the Marine & Offshore Division of Bureau Veritas.`,
  imageSrc: jamilImg,
}
,
 {
  name: "VIVEK SETH",
  title: "Chairman of the Board | ShipfinEx",
  description: `Mr. Vivek Seth is a distinguished senior maritime leader with nearly 35 years of global industry experience spanning operational excellence, commercial strategy, and top-tier executive leadership. With over 15 years at the C-suite level, he has played a pivotal role in driving large-scale growth, transformation, and value creation across some of the world’s most respected maritime organizations.

He previously served as Senior Vice President at ADNOC Logistics & Services, where he led strategic expansion initiatives and transformation programs across key maritime verticals. Prior to this, he was the Chief Executive Officer of Milaha Offshore, steering the organization through sustained growth, operational optimization, and strengthened market leadership.

From 2009 to 2014, he served as Managing Director – Middle East & India at Smit Lamnalco (UAE), holding full P&L responsibility across 11 countries. Under his leadership, the business successfully doubled in scale within five years, reinforcing the company’s regional footprint and operational strength.

Earlier in his career, Mr. Seth held senior leadership and operational roles with Svitzer and Tidewater across multiple geographies and maritime segments. His diverse exposure across offshore, port services, logistics, and asset-intensive maritime operations enables him to bring a holistic and forward-looking perspective to strategic decision-making.

Currently, he serves as Chairman of the Board at Shipfinex, a pioneering platform transforming the maritime sector through fractional ownership of maritime assets, unlocking new avenues for investment and asset optimization.

A former Chief Engineer, Mr. Seth combines strong seafaring foundations with seasoned executive acumen.

He holds an MBA from Manchester Business School, UK, and a Bachelor’s degree in Marine Engineering from MERI (formerly DMET), India.`,
  imageSrc: sankImg,
}
,
{
 name: "RAJESH MENON",
  title: `
Associate Director (SME–Maritime) | Department of Promotion of Industry and Internal Trade | Ministry of Commerce & Industry | Government of India`,
  role: "Moderator",
  description: `Rajesh Menon is a senior technocrat and maritime policy expert with nearly three decades of experience in infrastructure development, including over twenty years across ports, shipping, logistics, and multimodal transportation. His career uniquely spans government, large corporate groups, and academia, giving him a rare ability to bridge policy intent with commercial execution.

He has held senior leadership roles within the Government of India, contributing to national initiatives such as PM GatiShakti, Sagarmala, the National Logistics Policy, and the Indian Ports legislative framework. As a maritime subject-matter expert, he has evaluated and advised on complex infrastructure projects, developed integrated port connectivity and logistics strategies, and supported evidence-based policymaking at the highest levels of government.

In the private sector, Rajesh spent over a decade with the Adani Group and led strategic business development initiatives at major ports, managing large teams, negotiating high-value projects, and engaging closely with regulators, investors, and CXO leadership. Earlier, at the National Institute of Design, he helped establish commercially viable consultancy and training verticals, strengthening industry–academia collaboration.

Beyond executive roles, Rajesh is an active consultant, author, and visiting faculty member at premier institutions. He is a recognized public voice on maritime policy, logistics reform, sustainability, and infrastructure governance, known for translating complex technical issues into actionable policy and strategic insight.`,
  imageSrc: rajesh,
}
    
  ];

  return (
    <div className="bg-white min-h-screen">
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

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
          ABOUT MARPORTS 
        </h1>

        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* 1. Company Overview */}
          <section className="relative">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg shrink-0">
                <Building2 size={32} />
              </div>
              <div>
                {/* <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Company Overview
                </h2> */}
                <div className="text-lg font-bold text-gray-700 leading-relaxed">
                       <p>The Marports Global Conference & Excellence Awards is a premier international platform that unites maritime leaders, shipowners, port developers, terminal operators, ship designers and builders, digitalization experts, visionaries, and policymakers from around the world. Dedicated to shaping the future of the global maritime and port ecosystem, Marports Global convenes the industry's most influential voices to share insights, explore innovations, and celebrate excellence. From sessions on green shipping, port ecosystems, ship design and shipbuilding, digitalization, and decarbonization to honoring pioneers redefining maritime leadership, Marports Global charts the course for the future of ocean trade. Invited speakers and panellists can choose from a broad range of cutting-edge topics.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Advisory Board Section */}
          <section className="py-8">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-blue-600 text-white shadow-lg">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight text-center">
                MARPORTS ADVISORY  <span className="text-blue-600">BOARD</span>
                </h2>
              </div>
              <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <ProfileCard key={index} {...member} />
              ))}
            </div>
          </section>
{/* Organized By Heading */}
<div className="flex flex-col items-center mb-12 text-center">
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight uppercase">
    Organized by
  </h2>
  {/* Decorative underline to match the Speakers page style */}
  <div className="w-24 h-1.5 bg-blue-600 rounded-full mt-4"></div>
</div>

{/* Single Combined Content */}
<div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow mb-12">
  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
   <p>
  E Hub Events Pvt. Ltd. is the visionary force behind the Marports Global Conference & Excellence Awards — a premier international maritime platform conceived as an annual convergence of global industry leaders, innovators, and policymakers.
</p>

<p>
  Founded by Jayadevu Sreekumar, a seasoned event strategist with over two decades of experience, E Hub Events is built on a strong foundation of global exposure, strategic networking, and execution excellence.
</p>

<p>
  Jayadevu previously served as director at Aries Group of Companies, a leading maritime conglomerate with 70+ companies across 30 countries. During his 18-year tenure, he led the group's event management division, conceptualising and delivering high-impact conferences and awards across maritime, insurance, entertainment, medical, and real estate sectors.
</p>

<p>
  He was the driving force behind Shiptek, a globally recognised maritime event that expanded from Kochi to international destinations including the UAE, Singapore, Saudi Arabia, Greece, and Hong Kong — positioning it as one of the most respected maritime networking platforms originating from India.
</p>

<p>
  With Marports Global, E Hub Events ushers in a new era — establishing Thiruvananthapuram as an emerging maritime hub in India's Indian Ocean region and launching what is envisioned as a prestigious annual global gathering.
</p>

<p>
  At its core, E Hub Events stands for credibility, quality, global reach, and long-term industry impact.
</p>

<p className="font-semibold text-gray-900">
  Marports Global is not just a conference — it is the beginning of an enduring maritime legacy.
</p>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default About;