import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl text-blue-500 mb-4">
              <MdEmail />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
            <p className="text-gray-600 mb-2">Monday to Friday Expected</p>
            <p className="text-gray-600 mb-4">Response time: 72 hours</p>
            <Link
      href="mailto:amritpal29919singh@gmail.com"
      className="text-blue-600 hover:text-blue-800"
    >
      Send an Email <span>&#8594;</span>
    </Link>

          </div>

          {/* Live Chat Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl text-green-500 mb-4">
              <MdVoiceChat />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Live Chat</h2>
            <p className="text-gray-600 mb-2">Weekdays: 9 AM — 6 PM ET</p>
            <p className="text-gray-600 mb-4">Weekends: 9 AM — 5 PM ET</p>
            <Link href="/" className="text-green-600 hover:text-green-800">
              Chat Now <span>&#8594;</span>
            </Link>
          </div>

          {/* Community Forum Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl text-purple-500 mb-4">
              <MdForum />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Community Forum</h2>
            <p className="text-gray-600 mb-2">Monday to Friday Expected</p>
            <p className="text-gray-600 mb-4">Response time: 72 hours</p>
            <Link href="/" className="text-purple-600 hover:text-purple-800">
              Ask The Community <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
