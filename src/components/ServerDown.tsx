import React from 'react';
import { AlertCircle, X, RefreshCw, Mail } from 'lucide-react';

interface ServerDownProps {
  onRetry?: () => void;
  onDismiss?: () => void;
}

const ServerDown: React.FC<ServerDownProps> = ({ onRetry, onDismiss }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
        <div className="p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-red-500" aria-hidden="true" />
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <h3 className="text-lg font-medium text-gray-900">Connection Error</h3>
              <div className="mt-2 text-sm text-gray-500">
                <p>We're having trouble connecting to our servers. This could be due to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Internet connection issues</li>
                  <li>Server maintenance</li>
                  <li>Temporary service disruption</li>
                </ul>
              </div>
              <div className="mt-4 flex space-x-3">
                <button
                  type="button"
                  onClick={onRetry}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <RefreshCw className="-ml-1 mr-2 h-4 w-4" />
                  Try Again
                </button>
                <a
                  href="mailto:support@fridoma.com"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <Mail className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
                  Contact Support
                </a>
              </div>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                onClick={onDismiss}
              >
                <span className="sr-only">Close</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerDown;
