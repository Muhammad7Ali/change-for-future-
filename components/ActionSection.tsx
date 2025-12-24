import React from 'react';
import { ACTION_POINTS, FACTS, IMPACTS } from '../constants';
import { CheckCircle, Share2, Megaphone, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';

const ActionSection: React.FC = () => {

  const handleShare = async () => {
    const shareData = {
      title: 'Child Labour in Pakistan – Awareness & Action',
      text: 'Join the fight against child labour in Pakistan. Learn more and take action here:',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support navigator.share
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  const handleDownload = async () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const maxLineWidth = pageWidth - (margin * 2);
    
    // Generate Logo Data URL
    const getLogoDataUrl = (): Promise<string> => {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            canvas.width = 100;
            canvas.height = 100;
            const ctx = canvas.getContext('2d');
            if (!ctx) { resolve(''); return; }
            
            const img = new Image();
            // Lucide HeartHandshake SVG code
            const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 11"/><path d="m7 7-2.5 2.5"/><path d="m14 7 2.5 2.5"/><path d="M12 10.5A14.5 14.5 0 0 0 19 14"/><path d="M12 10.5C7.17 10.5 3.52 14 3 14"/></svg>`;
            const blob = new Blob([svgString], {type: 'image/svg+xml'});
            const url = URL.createObjectURL(blob);
            
            img.onload = () => {
                ctx.drawImage(img, 0, 0, 100, 100);
                URL.revokeObjectURL(url);
                resolve(canvas.toDataURL('image/png'));
            };
            img.src = url;
        });
    };

    const logoUrl = await getLogoDataUrl();
    let y = 20;

    // --- Header (Logo + Text) ---
    // Centering calculation: Text width approx 45mm, Icon 8mm, gap 2mm = Total ~55mm
    const totalHeaderWidth = 55;
    const startX = (pageWidth - totalHeaderWidth) / 2;

    if (logoUrl) {
        doc.addImage(logoUrl, 'PNG', startX, y - 6, 8, 8);
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("ChangeForFuture", startX + 10, y); 
    
    y += 12;

    // --- Title ---
    doc.setFontSize(14);
    doc.text("REPORT: CHILD LABOUR IN PAKISTAN - FACT SHEET", pageWidth / 2, y, { align: 'center' });
    y += 10;

    // --- Meta Data ---
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("Date:", margin, y);
    doc.setFont("helvetica", "normal");
    
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    doc.text(dateStr, margin + 12, y);
    y += 5;

    doc.setFont("helvetica", "bold");
    doc.text("Source:", margin, y);
    doc.setFont("helvetica", "normal");
    doc.text("ChangeForFuture (Student Awareness Initiative)", margin + 16, y);
    y += 10;

    // --- Content Structure ---
    const content = [
        {
            title: "1. EXECUTIVE SUMMARY:",
            body: "This report provides a factual overview of child labour in Pakistan, outlining its prevalence, key sectors, and the severe impacts on children and society. It concludes with actionable steps for individuals to contribute to the solution."
        },
        {
            title: "2. KEY FACTS:",
            list: [
                { label: "Prevalence:", text: "Pakistan has millions of children engaged in labour instead of attending school." },
                { label: "Primary Sectors:", text: "The majority of child labour occurs in workshops, agriculture, brick kilns, and domestic work." },
                { label: "Working Conditions:", text: "Many children work long hours in environments deemed unsafe or hazardous." },
                { label: "Economic Impact:", text: "Child labour increases poverty cycles and limits national development." }
            ]
        },
        {
            title: "3. IMPACTS:",
            body: "The consequences of child labour are far-reaching and detrimental.",
            list: [
                { label: "Poor Health:", text: "Physical and mental health deterioration due to hazardous working conditions." },
                { label: "Lack of Education:", text: "Denial of basic education leads to a lack of skills and future opportunities." },
                { label: "Cycle of Poverty:", text: "Working children often remain poor as adults, perpetuating the cycle of poverty." },
                { label: "Societal Damage:", text: "A society that allows child labour weakens its future workforce and economic growth." }
            ]
        },
        {
            title: "4. HOW TO HELP:",
            body: "Here are practical steps you can take to make a difference:",
            list: [
                { text: "Learn about child labour and its root causes." },
                { text: "Share awareness content responsibly within your community." },
                { text: "Support verified organizations working to end child labour." },
                { text: "Report observed instances of child labour through legal and official channels. Encourage education and ethical business practices." }
            ]
        }
    ];

    // --- Rendering Content ---
    content.forEach(section => {
        // Section Title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.text(section.title, margin, y);
        y += 5;

        // Section Body Text (if any)
        if (section.body) {
            doc.setFont("helvetica", "normal");
            doc.setFontSize(10);
            const splitBody = doc.splitTextToSize(section.body, maxLineWidth);
            doc.text(splitBody, margin, y);
            y += (splitBody.length * 4) + 2; // Tighter line height
        }

        // List Items
        if (section.list) {
            section.list.forEach(item => {
                doc.setFontSize(10);
                
                if (item.label) {
                    // Item with Label
                    doc.setFont("helvetica", "bold");
                    doc.text(item.label, margin, y);
                    
                    const labelWidth = doc.getTextWidth(item.label);
                    doc.setFont("helvetica", "normal");
                    
                    const availableWidthLine1 = maxLineWidth - labelWidth - 2;
                    const words = item.text.split(' ');
                    let line1 = "";
                    let remainingWords: string[] = [];
                    
                    for(let i=0; i<words.length; i++) {
                        if (doc.getTextWidth(line1 + words[i] + " ") < availableWidthLine1) {
                            line1 += words[i] + " ";
                        } else {
                            remainingWords = words.slice(i);
                            break;
                        }
                    }
                    
                    doc.text(line1, margin + labelWidth + 2, y);
                    
                    if (remainingWords.length > 0) {
                        const remainingText = remainingWords.join(" ");
                        const wrappedRest = doc.splitTextToSize(remainingText, maxLineWidth);
                        y += 4;
                        doc.text(wrappedRest, margin, y);
                        y += (wrappedRest.length * 4);
                    } else {
                        y += 4;
                    }
                    y += 1; // Gap between items
                } else {
                    // Simple List Item
                    doc.setFont("helvetica", "normal");
                    const splitText = doc.splitTextToSize(item.text || "", maxLineWidth);
                    doc.text(splitText, margin, y);
                    y += (splitText.length * 4) + 1;
                }
            });
        }
        y += 3; // Gap between sections
    });

    // --- Footer ---
    y += 5;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("For more information, please visit:", margin, y);
    
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0); 
    doc.text("Link to further resources", margin + 60, y); 
    doc.link(margin + 60, y - 3, 40, 5, { url: window.location.href });
    
    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("ChangeForFuture", pageWidth / 2, y, { align: 'center' });

    // Save
    doc.save("Child_Labour_Pakistan_FactSheet.pdf");
  };

  return (
    <section id="action" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-black font-bold tracking-widest uppercase text-sm border-b-2 border-black pb-1">Take Action</span>
            <h2 className="mt-6 text-3xl font-bold text-black mb-8 sm:text-4xl">Be The Change</h2>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Awareness without action is passive. Here are concrete steps you can take today to help eliminate child labour in Pakistan. Your voice and your choices matter.
            </p>
            
            <ul className="space-y-6">
              {ACTION_POINTS.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 md:p-10 border border-gray-200 shadow-sm">
             <h3 className="text-2xl font-bold text-black mb-6">Immediate Actions</h3>
             <div className="space-y-4">
                <button 
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 hover:bg-gray-800 transition-all group cursor-pointer"
                >
                   <Share2 className="h-5 w-5" />
                   <span className="font-bold tracking-wide">Share This Awareness App</span>
                </button>
                
                <a href="mailto:contact@sparcpk.org" className="w-full flex items-center justify-center gap-3 bg-white border-2 border-black text-black px-6 py-4 hover:bg-black hover:text-white transition-all group">
                   <Megaphone className="h-5 w-5" />
                   <span className="font-bold tracking-wide">Report a Case (SPARC)</span>
                </a>

                <button 
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-3 bg-gray-200 text-gray-700 px-6 py-4 hover:bg-gray-300 transition-all cursor-pointer"
                >
                   <Download className="h-5 w-5" />
                   <span className="font-medium">Download Fact Sheet</span>
                </button>
             </div>

             <div className="mt-10 pt-8 border-t border-gray-200 text-center">
               <p className="font-serif italic text-lg text-gray-800">
                 "The child is the father of man."
               </p>
               <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">- William Wordsworth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;