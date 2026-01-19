'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What are Forex Trading Signals?',
    answer: 'Forex trading signals are trade recommendations or alerts provided by experienced traders or automated systems. These signals provide key information such as the currency pair to trade, the price at which to enter the market, and stop-loss/take-profit levels. By following trading signals, you will save the time required to analyze the market but you are still able to see results. At Aeon Forex we only share the trades that we personally also take. So my result can become your result if followed correctly.'
  },
  {
    question: 'How does the Aeon Forex Group work?',
    answer: 'When you decide to join my Group, you will first receive documents and videos that are designed to make you understand forex trading + how to follow the analysis. In the documents and videos I will talk about how you can copy the trades in the best way, how you can apply proper risk management (extremely important) and how you can view the markets yourself. In the group, you receive real-time notifications. These notifications will suggest the entry and exit points for a trade based on technical analysis, fundamental analysis, or a combination of both. Nothing is financial advice, I\'m just sharing my view on the market.'
  },
  {
    question: 'What are the costs?',
    answer: 'Joining my Group is FREE. Yes, you heard that right. I partnered up with one of the biggest brokers in the forex industry and they pay me a commission when I refer a trader to their platform. You need to trade with at least 350€ and that will automatically claim your free spot in my Group. The 350€ is used to trade, so if you follow the group correctly, you should be able to see yourself improve!'
  },
  {
    question: 'Can beginners join the Group?',
    answer: 'Most definitely! Actually, around 85% of the current members never traded before and learnt it all through my program. I have over 4000 active members in my Group and the success rate is insanely high. I\'m sure I can learn anyone to become consistent in forex trading, as long as they are open to be helped.'
  },
  {
    question: 'Are There Any Risks Involved in Using Forex Signals?',
    answer: 'Yes, just like any other form of trading/investing there are risks. You are the one that is in control of your account. I can give recommendations, but it is up to you if you decide to follow those or follow your own plan. Please make sure to not over-leverage and/or over-trade. This is all emotional trading and it will expose your account to unnecessary risks. This is also the main thing I try to make clear in the Group.'
  },
  {
    question: 'What is the difference between the Aeon Forex Free Group and the Aeon Forex Group?',
    answer: 'In the Free Group there are only 2-3 trades shared per week. This is just for you to have a taste of what the Group is like and what kind of trades will be shared. In the Group we share on average 5-6 trades every single day + share our views on the markets + share other knowledge about the market and value that impacts the market. There is also no \'annoying\' promotion about the group, just trading.'
  },
  {
    question: 'What is included in the Aeon Forex Group?',
    answer: 'On average 5-6 trades per day, Average win-ratio of 83%, Full course with everything explained from A to Z, Documents about risk management (& more), 1:1 guidance from me and my team, Weekly outlooks on the market'
  },
  {
    question: 'Why do I need to deposit at least 350€?',
    answer: 'I partnered up with one of the biggest brokers in the forex industry. They set a requirement that will pay for your access to my Group only if you trade with at least 350€ (or the equivalent to that in a different currency). Unfortunately, I can\'t change this. Please note: With the 350€ you are going to trade. You don\'t pay me or the broker a single Euro/Dollar/Pound. The goal is to help you become consistent in the market, so eventually you should be able to withdraw a lot more than you deposited - but that is in your own control of course.'
  },
  {
    question: 'How can I verify the performance of the Group?',
    answer: 'You should always verify the performance that is being claimed. Many people talk a lot but cannot back it up. I\'ve been doing this for a very long time now and have a long track record built up. You can find it via the results section on this page. For the more advanced traders: The reason I don\'t have an FXBlue or MyFXBook is that I personally trade a lot of prop firm accounts (where you often get new accounts after a payout) and changed personal broker many times because of spread reasons. It is impossible to track a performance like this. If you want to verify the reports, make sure to scroll back in the Free Group as I share the reports regularly.'
  },
  {
    question: 'Can I join the Group with any broker?',
    answer: 'If you want to join the Group for free, you must use the broker that I personally use as well and have a partnership with. The broker will pay for your access as long as you actively trade. If you want to use your own broker account, there is an option to pay for access to the group.'
  },
  {
    question: 'What broker do you use?',
    answer: 'I use trusted brokers that are regulated and secure. For every country there is a specific broker that is most suitable. The brokers I work with are all equally as good, it is just because of country policies that not any broker can be used. Please ask for the options specific to your situation so we can find you the broker and account type that suits you the best. The brokers are all good. Even big withdrawals are processed very quickly, which is the most important to me. I don\'t want my community to use bad brokers that scam (trust me, there are a lot around). The ones I use are all trustworthy and safe.'
  },
  {
    question: 'I\'m ready to start in your community. How do I join?',
    answer: 'That is amazing. I\'ll be happy to help you out. The process of becoming a member only takes 15 to 20 minutes. Follow the steps below: 1) Send me a private message via any Aeon Forex social media or contact form. 2) I will ask you a few questions in order to know your situation and help you the best I can. Please answer these questions in all honesty. 3) After our short conversation, I will send you the instructions to set up your account. Follow the steps carefully to avoid any delays. 4) After successfully registering your account, I will do a quick check up and once this is done, you will be onboarded to the Group. And that\'s it, congratulations! You are now officially part of the Aeon Forex Community. It will be an exciting journey.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111] snap-start snap-always pt-20 md:pt-24 py-12 md:py-8">
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Everything you need to know about Aeon Forex
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-h-[60vh] md:max-h-[70vh] overflow-y-auto px-2 sm:px-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5 hover:shadow-xl hover:shadow-[#D4AF37]/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-3 md:px-4 py-3 md:py-4 flex items-start justify-between text-left hover:bg-gray-900/70 transition-colors gap-2"
              >
                <span className="text-xs sm:text-sm font-semibold text-white flex-1 text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 md:px-4 pb-3 md:pb-4 pt-2">
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
