import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
}

const terms = [
  'The Consultant shall perform the Services as mutually agreed between the Parties in writing.',
  "The Client and the Consultant agree that where all or any of the Services are acquired for the purposes of a business the provisions of the Consumer Guarantees Act 1993 are excluded in relation to those Services. However, nothing in this Agreement shall restrict, negate, modify or limit any of the Client's rights under the Consumer Guarantees Act 1993 where the Services acquired are of a kind ordinarily acquired for personal, domestic or household use or consumption and the Client is not acquiring the Services for the purpose of a business.",
  'In providing the Services, the Consultant must use the degree of skill, care and diligence reasonably expected of a professional consultant providing services similar to the Services.',
  "The Client shall provide to the Consultant, free of cost, as soon as practicable following any request for information, all information in the Client's power to obtain which may relate to the Services. The Consultant shall not, without the Client's prior consent, use information provided by the Client for purposes unrelated to the Services. In providing the information to the Consultant, the Client shall ensure compliance with the Copyright Act 1994 and shall identify any proprietary rights that any other person may have in any information provided.",
  'As soon as either Party becomes aware of anything that will materially affect the scope or timing of the Services, the Party must notify the other Party in writing and where the Consultant considers a direction from the Client or any other circumstance is a variation the Consultant shall notify the Client accordingly.',
  'The Client may order variations to the Services in writing or may request the Consultant to submit proposals for variations to the Services.',
  'The Client shall pay the Consultant for the Services the fees and expenses at the times and in the manner as mutually agreed between the Parties in writing. Where this Agreement has been entered by an agent (or a person purporting to act as agent) on behalf of the Client, the agent and Client shall be jointly and severally liable for payment of all fees and expenses due to the Consultant under this Agreement.',
  'All amounts payable by the Client shall be due on the 20th of the month following the month of issue of each GST Invoice or at such other timing as agreed between the Parties in writing. If the Client fails to make the payment that is due and payable and that default continues for 14 days, the Consultant may provide written notice to the Client specifying the default and requiring payment within 7 days from the date of the notice. Unless payment has been made by the Client in full, the Consultant may suspend performance of the Services any time after expiration of the notice period. The Consultant must promptly lift the suspension after the Client has made the payment. Regardless of whether or not the Consultant suspends the performance of the Services in accordance with this clause, the Consultant may charge interest on overdue amounts from the date payment falls due to the date of payment at the rate of the Reserve Bank of New Zealand Official Cash Rate plus 5% per annum and in addition the costs of any actions taken by the Consultant to recover the debt.',
  'Where the nature of the Services is such that it is covered by the Construction Contracts Act 2002 (CCA) and the Consultant has issued a payment claim in accordance with the CCA, the provisions of the CCA shall apply. In all other cases, if the Client, acting reasonably, disputes an invoice, or part of an invoice, the Client must promptly give the reasons for withholding the disputed amount and pay any undisputed amount in accordance with clause 8.',
  'Where Services are carried out on a time charge basis, the Consultant may purchase such incidental goods and/or Services as are reasonably required for the Consultant to perform the Services. The cost of obtaining such incidental goods and/or Services shall be payable by the Client. The Consultant shall maintain records which clearly identify time and expenses incurred.',
  'Where the Consultant breaches this Agreement, the Consultant is liable to the Client for reasonably foreseeable claims, damages, liabilities, losses or expenses caused directly by the breach. The Consultant shall not be liable to the Client under this Agreement for the Client\'s indirect, consequential or special loss, or loss of profit, however arising, whether under contract, in tort or otherwise.',
  'The maximum aggregate amount payable, whether in contract, tort or otherwise, in relation to claims, damages, liabilities, losses or expenses, shall be five times the fee (exclusive of GST and disbursements) with a maximum limit of $NZ250,000.',
  'Without limiting any defences a Party may have under the Limitation Act 2010, neither Party shall be considered liable for any loss or damage resulting from any occurrence unless a claim is formally made on a Party within 6 years from completion of the Services.',
  'The Consultant shall take out and maintain for the duration of the Services a policy of Professional Indemnity insurance for the amount of liability under clause 12. The Consultant undertakes to use all reasonable endeavours to maintain a similar policy of insurance for six years after the completion of the Services.',
  'If either Party is found liable to the other (whether in contract, tort or otherwise), and the claiming Party and/or a Third Party has contributed to the loss or damage, the liable Party shall only be liable to the proportional extent of its own contribution.',
  'Intellectual property prepared or created by the Consultant in carrying out the Services, and provided to the Client as a deliverable, ("New Intellectual Property") shall be jointly owned by the Client and the Consultant. The Client and Consultant hereby grant to the other an unrestricted royalty-free license in perpetuity to copy or use New Intellectual Property. The Clients\' rights in relation to this New Intellectual Property are conditional upon the Client having paid all amounts due and owing to the Consultant in accordance with clauses 7 and 8. Intellectual property owned by a Party prior to the commencement of this Agreement (Pre-existing Intellectual Property) and intellectual property created by a Party independently of this Agreement remains the property of that Party. The Consultant accepts no liability for the use of New Intellectual Property or Pre-existing Intellectual Property other than to the extent reasonably required for the intended purposes.',
  'The Consultant has not and will not assume any duty imposed on the Client pursuant to the Health and Safety at Work Act 2015 ("the Act") in connection with the Agreement.',
  "The Client may suspend all or part of the Services by notice to the Consultant who shall immediately make arrangements to stop the Services and minimise further expenditure. The Client and the Consultant may (in the event the other Party is in material default that has not been remedied within 14 days of receiving the other Party's notice of breach) either suspend or terminate the Agreement by notice to the other Party. If the suspension has not been lifted after 2 months the Consultant has the right to terminate the Agreement and claim reasonable costs as a result of the suspension. Suspension or termination shall not prejudice or affect the accrued rights or claims and liabilities of the Parties.",
  'The Parties shall attempt in good faith to settle any dispute themselves but failing that by mediation.',
  'This Agreement is governed by the New Zealand law, the New Zealand courts have jurisdiction in respect of this Agreement, and all amounts are payable in New Zealand dollars.',
]

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'long',
  })

  return (
    <>
      <section className="pt-32 pb-12 max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
          Terms of <span className="text-balestra-red italic">Engagement</span>
        </h1>
        <div className="w-24 h-1 bg-balestra-red mb-8" />
        <p className="text-sm text-gray-400 uppercase tracking-widest">
          Standard Terms &amp; Conditions
        </p>
      </section>

      <section className="pb-24 max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {terms.map((term, index) => (
            <div key={index} className="flex gap-4 md:gap-6 items-start group">
              <span className="font-serif text-balestra-red text-xl md:text-2xl font-bold leading-none mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                {index + 1}.
              </span>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{term}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center md:text-left">
          <p className="text-gray-500 text-sm italic">Last Updated: {lastUpdated}</p>
        </div>
      </section>
    </>
  )
}
