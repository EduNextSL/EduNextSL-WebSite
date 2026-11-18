
import React from "react";
import {
  ShieldCheck,
  Trash2,
  Mail,
  UserX,
  Database,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const DataDeletion: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-xl font-bold text-blue-700">
              EduNext SL
            </span>
            <span className="text-sm text-slate-500">
              Learning Solutions
            </span>
          </Link>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-blue-700" />
          </div>

          <p className="text-blue-700 font-semibold mb-3">
            PRIVACY AND DATA PROTECTION
          </p>

          <h1 className="text-4xl font-bold mb-5">
            Data Deletion Instructions
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto leading-7">
            At EduNext SL, we respect your privacy and your right
            to control your personal information. You can request
            the deletion of your account and associated personal
            data by following the instructions below.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <UserX className="text-blue-700 w-6 h-6" />
            <h2 className="text-2xl font-bold">
              How to request account deletion
            </h2>
          </div>

          <p className="text-slate-600 leading-7 mb-6">
            If you no longer wish to use EduNext SL, you can
            request deletion of your account by contacting our
            support team through the email address below.
          </p>

          <div className="space-y-5">
            <div className="flex gap-4">
              <span className="w-9 h-9 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold">Send a request</h3>
                <p className="text-slate-600 text-sm leading-6">
                  Email us using the email address associated
                  with your EduNext SL account.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-9 h-9 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                2
              </span>
              <div>
                <h3 className="font-semibold">Verify your identity</h3>
                <p className="text-slate-600 text-sm leading-6">
                  We may ask for reasonable information to
                  verify that you own the account.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-9 h-9 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                3
              </span>
              <div>
                <h3 className="font-semibold">Request processing</h3>
                <p className="text-slate-600 text-sm leading-6">
                  Our team will review your request and process
                  eligible account and data deletion.
                </p>
              </div>
            </div>
          </div>

          <a
            href="mailto:edunextsl@gmail.com?subject=EduNext%20SL%20Account%20Deletion%20Request"
            className="mt-8 flex items-center justify-center gap-3
              bg-blue-700 hover:bg-blue-800 text-white font-semibold
              rounded-xl px-6 py-4 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Request Account Deletion
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border rounded-2xl p-6">
            <Trash2 className="w-7 h-7 text-red-600 mb-4" />
            <h2 className="font-bold text-lg mb-3">
              What happens to your data?
            </h2>
            <p className="text-slate-600 text-sm leading-7">
              Once your request is verified and approved, we
              will delete or anonymize personal information
              associated with your account, subject to applicable
              legal and administrative retention requirements.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6">
            <Database className="w-7 h-7 text-blue-700 mb-4" />
            <h2 className="font-bold text-lg mb-3">
              Data that may be retained
            </h2>
            <p className="text-slate-600 text-sm leading-7">
              Certain records may need to be retained where
              required by law, for legitimate security purposes,
              or to resolve outstanding obligations. Such data
              will only be retained as permitted by applicable
              requirements.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 mb-8">
          <h2 className="text-xl font-bold mb-3">
            Need assistance?
          </h2>
          <p className="text-slate-600 leading-7 mb-4">
            If you have questions about your personal information
            or the deletion process, contact our support team.
          </p>
          <a
            href="mailto:edunextsl@gmail.com"
            className="text-blue-700 font-semibold hover:underline"
          >
            edunextsl@gmail.com
          </a>
        </div>

        <div className="text-center text-sm text-slate-500">
          <p>EduNext SL – Learning Solutions</p>
          <p className="mt-2">
            For more information, read our{" "}
            <Link
              to="/privacy-policy"
              className="text-blue-700 hover:underline"
            >
              Privacy Policy
            </Link>.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-6 text-blue-700 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default DataDeletion;
