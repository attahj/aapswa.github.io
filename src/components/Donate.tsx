import { Building2, Smartphone, CreditCard, ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const donationAmounts = [50, 100, 250, 500, 1000, 2500];

export default function Donate() {
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="donate" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Support Our Mission
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Make a Donation
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Every contribution — large or small — brings us closer to opening the doors
            of our community center. Your generosity will be felt for generations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8">
            <h3 className="text-stone-900 font-bold text-xl mb-6">Choose an Amount</h3>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`py-3 rounded-xl font-semibold text-sm transition-all duration-200 border ${
                    selectedAmount === amount && !customAmount
                      ? 'bg-amber-600 text-white border-amber-600 shadow'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-amber-400 hover:text-amber-700'
                  }`}
                >
                  ${amount.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-stone-600 text-sm font-medium mb-2">
                Or enter a custom amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 font-semibold">
                  $
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-stone-900"
                />
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
              <p className="text-amber-800 text-sm font-semibold mb-1">Your Impact</p>
              <p className="text-amber-700 text-sm">
                {(selectedAmount ?? Number(customAmount) ?? 0) >= 2500
                  ? 'A founding-level gift! You will be recognized as a Community Founder on our center wall.'
                  : (selectedAmount ?? Number(customAmount) ?? 0) >= 1000
                  ? 'Covers legal and permitting costs for a portion of the project.'
                  : (selectedAmount ?? Number(customAmount) ?? 0) >= 500
                  ? 'Funds one month of community outreach and planning meetings.'
                  : (selectedAmount ?? Number(customAmount) ?? 0) >= 250
                  ? 'Covers survey materials and community needs assessment tools.'
                  : (selectedAmount ?? Number(customAmount) ?? 0) >= 100
                  ? 'Contributes toward site evaluation and feasibility studies.'
                  : 'Every dollar helps bring our community center closer to reality.'}
              </p>
            </div>

            <p className="text-stone-400 text-xs text-center">
              Afghan Association of Puget Sound is a registered nonprofit. Donations may be tax-deductible. Please consult your tax advisor.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="text-blue-600" size={22} />
                </div>
                <div>
                  <h3 className="text-stone-900 font-bold text-lg">Zelle</h3>
                  <p className="text-stone-500 text-sm">Instant bank transfer — no fees</p>
                </div>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-stone-500 text-xs mb-1">Send to email or phone</p>
                  <p className="text-stone-900 font-semibold">donate@aapswa.org</p>
                </div>
                <button
                  onClick={() => handleCopy('donate@aapswa.org', 'zelle')}
                  className="flex items-center gap-1.5 text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors"
                >
                  {copied === 'zelle' ? <Check size={15} /> : <Copy size={15} />}
                  {copied === 'zelle' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-stone-400 text-xs mt-3">
                Open your banking app, go to Zelle, and send to the address above. Memo: "Community Center Fund"
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Building2 className="text-emerald-600" size={22} />
                </div>
                <div>
                  <h3 className="text-stone-900 font-bold text-lg">Bank Transfer / Wire</h3>
                  <p className="text-stone-500 text-sm">Direct deposit to our account</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-stone-50 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <p className="text-stone-400 text-xs">Bank Name</p>
                    <p className="text-stone-900 font-medium text-sm">Chase Bank</p>
                  </div>
                  <button
                    onClick={() => handleCopy('Chase Bank', 'bank')}
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    {copied === 'bank' ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
                <div className="bg-stone-50 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <p className="text-stone-400 text-xs">Account Name</p>
                    <p className="text-stone-900 font-medium text-sm">Afghan Association of Puget Sound</p>
                  </div>
                  <button
                    onClick={() => handleCopy('Afghan Association of Puget Sound', 'accname')}
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    {copied === 'accname' ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
                <div className="bg-stone-50 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <p className="text-stone-400 text-xs">Routing Number</p>
                    <p className="text-stone-900 font-medium text-sm">026009593</p>
                  </div>
                  <button
                    onClick={() => handleCopy('026009593', 'routing')}
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    {copied === 'routing' ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
                <div className="bg-stone-50 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <p className="text-stone-400 text-xs">Account Number</p>
                    <p className="text-stone-900 font-medium text-sm">XXXX-XXXX-XXXX</p>
                  </div>
                  <button
                    onClick={() => handleCopy('XXXXXXXXXXXX', 'account')}
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    {copied === 'account' ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
              <p className="text-stone-400 text-xs mt-3">
                Please email us at donate@aapswa.org after sending a wire so we can confirm receipt.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="text-amber-600" size={22} />
                </div>
                <div>
                  <h3 className="text-stone-900 font-bold text-lg">Check</h3>
                  <p className="text-stone-500 text-sm">Mail a check to our PO Box</p>
                </div>
              </div>
              <div className="bg-stone-50 rounded-xl p-4">
                <p className="text-stone-700 text-sm font-medium">Payable to:</p>
                <p className="text-stone-900 font-semibold mt-1">Afghan Association of Puget Sound</p>
                <p className="text-stone-600 text-sm mt-3 font-medium">Mail to:</p>
                <p className="text-stone-800 text-sm mt-1">
                  PO Box [XXXX]<br />
                  Lynnwood, WA 98036
                </p>
              </div>
            </div>

            <a
              href="mailto:donate@aapswa.org?subject=Donation Inquiry"
              className="flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold py-4 rounded-2xl transition-colors duration-200"
            >
              Questions about donating?
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
