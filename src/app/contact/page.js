import ContactCard from '@/app/components/ContactCard'
import ContactForm from '@/app/components/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-4">
        We’d love to hear <span className="text-blue-500">from you</span>
      </h2>
      <p className="text-center text-gray-300 mb-12">
        Whether you’ve got a question, project idea, or just want to say hello—my inbox is open.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ContactCard icon={<Mail size={20} />} title="Email" value="amritpal29919singh@gmail.com" />
          <ContactCard icon={<Phone size={20} />} title="Phone" value="+1 (365) 883‑5997" />
          <ContactCard icon={<MapPin size={20} />} title="Location" value="Toronto, ON" />
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
