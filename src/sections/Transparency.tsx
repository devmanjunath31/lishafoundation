import { Shield, FileText, Users, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const Transparency = () => {
  const governance = [
    {
      icon: Users,
      title: 'Board Meetings',
      description: 'Quarterly board meetings with documented minutes',
    },
    {
      icon: Scale,
      title: 'Decision Making',
      description: 'Transparent and participatory decision-making process',
    },
    {
      icon: Shield,
      title: 'Conflict of Interest',
      description: 'Clear policy to manage conflicts of interest',
    },
  ];

  const policies = [
    { name: 'Code of Conduct for Staff', status: 'Active' },
    { name: 'Code of Conduct for Volunteers', status: 'Active' },
    { name: 'Code of Conduct for Board Members', status: 'Active' },
    { name: 'Child Protection Policy', status: 'Active' },
    { name: 'Prevention of Sexual Harassment (POSH)', status: 'Active' },
    { name: 'Financial Transparency Policy', status: 'Active' },
  ];

  const financialData = [
    { category: 'Program Expenses', percentage: 85, amount: '₹XX Lakhs' },
    { category: 'Administrative Costs', percentage: 10, amount: '₹XX Lakhs' },
    { category: 'Fundraising Costs', percentage: 5, amount: '₹XX Lakhs' },
  ];

  return (
    <section id="transparency" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparency & Governance
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to the highest standards of transparency, accountability, and ethical
            governance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {governance.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border-2 border-green-100 hover:border-green-600 hover:shadow-lg transition-all"
              >
                <Icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-7 h-7 text-green-600 mr-3" />
              Policies & Procedures
            </h3>
            <div className="space-y-3">
              {policies.map((policy, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="font-medium text-gray-900">{policy.name}</span>
                  </div>
                  <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    {policy.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-7 h-7 text-green-600 mr-3" />
              Financial Allocation
            </h3>
            <div className="space-y-6">
              {financialData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">{item.category}</span>
                    <div className="text-right">
                      <span className="font-bold text-green-600">{item.percentage}%</span>
                      <p className="text-sm text-gray-600">{item.amount}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-600 to-green-500 rounded-full h-3"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600 p-4 bg-green-50 rounded-lg">
              All financial data is audited annually by certified auditors and is available for
              public review.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Right to Information (RTI)</h3>
            <div className="space-y-3">
              <p className="text-green-100">
                We are committed to transparency and welcome RTI requests from citizens.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="font-semibold mb-2">RTI Contact Person:</p>
                <p className="text-green-100">G. Brahmananda, Secretary</p>
                <p className="text-green-100 text-sm">lishacharitabletrust888@gmail.com</p>
              </div>
              <p className="text-sm text-green-100">
                RTI requests will be processed within 30 days of receipt.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="w-7 h-7 text-green-600 mr-3" />
              Grievance Redressal
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                We take all complaints and grievances seriously and are committed to addressing
                them promptly.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">1.</span>
                  <p className="text-gray-700">Submit complaint via email or written letter</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">2.</span>
                  <p className="text-gray-700">Acknowledgment within 3 working days</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">3.</span>
                  <p className="text-gray-700">Investigation and resolution within 15 days</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">4.</span>
                  <p className="text-gray-700">
                    Escalation to Board if not resolved satisfactorily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transparency is not just a policy for us—it's a core value. We believe that our
            stakeholders have the right to know how we operate and how their contributions are
            making a difference.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <p className="text-3xl font-bold text-green-600 mb-2">100%</p>
              <p className="text-gray-700">Financial Transparency</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <p className="text-3xl font-bold text-green-600 mb-2">Annual</p>
              <p className="text-gray-700">External Audits</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <p className="text-3xl font-bold text-green-600 mb-2">Public</p>
              <p className="text-gray-700">Reports & Documents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
