import React, { useState } from 'react';
import { Users, FileText, Award, CalendarCheck, Shield } from 'lucide-react';

export const MadrasaMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'fees' | 'exams'>('students');

  const studentsList = [
    {
      roll: 'M-1024',
      name: 'Muhammad Zaid Farooqi',
      department: 'Hifz-ul-Quran (Juz 18)',
      guardian: 'Tariq Farooqi',
      status: 'Hostel Resident',
      attendance: '98.5%',
    },
    {
      roll: 'M-1025',
      name: 'Abdullah Bin Bilal',
      department: 'Alimiyyah (Year 2)',
      guardian: 'Bilal Ahmad',
      status: 'Day Scholar',
      attendance: '95.0%',
    },
    {
      roll: 'M-1026',
      name: 'Umar Khalid Siddique',
      department: 'Tajweed & Qira’at',
      guardian: 'Khalid Siddique',
      status: 'Hostel Resident',
      attendance: '100%',
    },
  ];

  const feeRecords = [
    {
      voucherNo: 'VCH-8821',
      student: 'Muhammad Zaid Farooqi',
      month: 'Rabi al-Awwal / October',
      amount: '$45.00',
      status: 'Paid (Bank Voucher)',
    },
    {
      voucherNo: 'VCH-8822',
      student: 'Abdullah Bin Bilal',
      month: 'Rabi al-Awwal / October',
      amount: '$30.00',
      status: 'Pending Verification',
    },
    {
      voucherNo: 'VCH-8823',
      student: 'Anas Haroon (Kafalah)',
      month: 'Rabi al-Awwal / October',
      amount: '$45.00',
      status: 'Scholarship / Zakat Funded',
    },
  ];

  return (
    <div className="bg-[#202722] text-[#F7F5EF] rounded-xl border border-[#323C35] shadow-xl overflow-hidden font-sans">
      {/* Top Banner */}
      <div className="bg-[#123B2A] px-4 py-3 border-b border-[#224E3A] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#D6B46A]" />
          <span className="text-xs font-bold tracking-wider uppercase text-white">
            YUSER Madrasa Management
          </span>
          <span className="text-[10px] bg-[#164632] text-[#D6B46A] border border-[#224E3A] px-2 py-0.5 rounded font-mono">
            Administrative Portal
          </span>
        </div>
        <div className="flex items-center gap-2">
          {(['students', 'fees', 'exams'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-[#D6B46A] text-[#123B2A] font-bold'
                  : 'bg-[#164632] text-[#EFECE3]/80 hover:text-white'
              }`}
            >
              {tab === 'students'
                ? 'Student Register'
                : tab === 'fees'
                ? 'Fee & Donation Vouchers'
                : 'Examination Marks'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tab Views */}
      <div className="p-4 min-h-[380px]">
        {activeTab === 'students' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-[#9AA39D] pb-1 border-b border-[#323C35]">
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#D6B46A]" /> Enrolled Talib-e-Ilm (Student) Register
              </span>
              <span className="font-mono text-[#D6B46A]">Academic Session 1446-1447 AH</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#3A473E] text-[#9AA39D] font-mono">
                    <th className="py-2 pr-3">Roll ID</th>
                    <th className="py-2 pr-3">Student Name</th>
                    <th className="py-2 pr-3">Department</th>
                    <th className="py-2 pr-3">Boarding Status</th>
                    <th className="py-2 text-right">Attendance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2B352E]">
                  {studentsList.map((st) => (
                    <tr key={st.roll} className="hover:bg-[#2A342D]/50 transition-colors">
                      <td className="py-2.5 pr-3 font-mono text-[#D6B46A]">{st.roll}</td>
                      <td className="py-2.5 pr-3 font-medium text-white">{st.name}</td>
                      <td className="py-2.5 pr-3 text-[#EFECE3]/80">{st.department}</td>
                      <td className="py-2.5 pr-3">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] bg-[#18201B] border border-[#2B352E] text-[#9AA39D]">
                          {st.status}
                        </span>
                      </td>
                      <td className="py-2.5 text-right font-mono text-emerald-400 font-semibold">
                        {st.attendance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-[#18201B] rounded-lg border border-[#2B352E] flex items-center justify-between text-xs text-[#9AA39D] mt-2">
              <span>Hifz Sabqi & Manzil tracking module ready</span>
              <span className="text-[#EFECE3] font-mono flex items-center gap-1">
                <CalendarCheck className="w-3.5 h-3.5 text-[#D6B46A]" /> Daily Quran Memorization Log
              </span>
            </div>
          </div>
        )}

        {activeTab === 'fees' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-[#9AA39D] pb-1 border-b border-[#323C35]">
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#D6B46A]" /> Monthly Educational Voucher Register
              </span>
              <span className="font-mono text-white">Voucher Generation Batch</span>
            </div>

            <div className="space-y-2">
              {feeRecords.map((rec) => (
                <div
                  key={rec.voucherNo}
                  className="bg-[#2A342D] border border-[#3A473E] p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#D6B46A] bg-[#18201B] px-1.5 py-0.5 rounded mr-2">
                      {rec.voucherNo}
                    </span>
                    <strong className="text-white">{rec.student}</strong>
                    <span className="text-[#9AA39D] block text-[11px] sm:inline sm:ml-2">
                      ({rec.month})
                    </span>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3">
                    <span className="font-mono font-bold text-white text-sm">{rec.amount}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                        rec.status.includes('Paid')
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                          : rec.status.includes('Scholarship')
                          ? 'bg-[#123B2A] text-[#D6B46A] border border-[#224E3A]'
                          : 'bg-amber-950/70 text-amber-300 border border-amber-800'
                      }`}
                    >
                      {rec.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#9AA39D] text-center pt-2">
              Supports three-copy printable bank slips (Student, Bank, Madrasa Accounts).
            </p>
          </div>
        )}

        {activeTab === 'exams' && (
          <div className="space-y-3">
            <div className="bg-[#2A342D] p-3.5 rounded-lg border border-[#3A473E] space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D6B46A]" /> Semester Imtihan (Examination) Tabulation
                </span>
                <span className="text-[10px] font-mono text-[#D6B46A]">Mid-Year Session</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
                <div className="bg-[#18201B] p-2.5 rounded text-center">
                  <span className="text-[10px] text-[#9AA39D] block">Mumtaz (Distinction)</span>
                  <strong className="text-emerald-400 text-sm">34 Students</strong>
                </div>
                <div className="bg-[#18201B] p-2.5 rounded text-center">
                  <span className="text-[10px] text-[#9AA39D] block">Jayyid Jiddan (Very Good)</span>
                  <strong className="text-white text-sm">48 Students</strong>
                </div>
                <div className="bg-[#18201B] p-2.5 rounded text-center">
                  <span className="text-[10px] text-[#9AA39D] block">Jayyid (Good)</span>
                  <strong className="text-white text-sm">21 Students</strong>
                </div>
                <div className="bg-[#18201B] p-2.5 rounded text-center">
                  <span className="text-[10px] text-[#9AA39D] block">Pass Percentage</span>
                  <strong className="text-[#D6B46A] text-sm">96.8%</strong>
                </div>
              </div>
              <p className="text-[11px] text-[#9AA39D] pt-1">
                Automatic generation of Arabic & English certificates with official institutional seal watermark.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
