import React, { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

export default function CollapsibleServiceBanner({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-100 to-purple-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg overflow-hidden">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between cursor-pointer px-6 py-4"
        >
          <div className="flex items-center gap-3">
            <Info className="text-blue-600 dark:text-blue-400 w-6 h-6" />
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
              {title || "Selected Service"}
            </h2>
          </div>
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-slate-700 dark:text-white" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-700 dark:text-white" />
          )}
        </div>

        {isOpen && (
          <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
            {description ||
              "Here’s a detailed explanation of the selected service. It helps clients understand the value and deliverables of the offering."}
          </div>
        )}
      </div>
    </div>
  );
}
