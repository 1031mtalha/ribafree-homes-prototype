import { useState } from 'react'
import { site } from '../config/site'
import { submitInquiry } from '../lib/submitInquiry'

const fieldsByTrack = {
  investor: [
    { name: 'name', label: 'Full name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    {
      name: 'range',
      label: 'Investment range',
      type: 'select',
      options: ['Under $50k', '$50k – $150k', '$150k – $500k', '$500k+', 'Prefer to discuss'],
    },
    {
      name: 'interest',
      label: 'Interest area',
      type: 'select',
      options: ['Land acquisition', 'Distressed property rehab', 'New construction', 'Open to any'],
    },
    { name: 'message', label: 'Anything else', type: 'textarea', full: true },
  ],
  buyer: [
    { name: 'name', label: 'Full name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'area', label: 'Target city / area', type: 'text' },
    { name: 'budget', label: 'Estimated home budget', type: 'text' },
    {
      name: 'downPayment',
      label: 'Down payment readiness',
      type: 'select',
      options: [
        'I can put ~30% down today',
        'I’m within a year of ~30%',
        'I’m not near 30% yet',
      ],
    },
    { name: 'message', label: 'Tell us about your situation', type: 'textarea', full: true },
  ],
}

export default function ContactForm({ track }) {
  const [values, setValues] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const fields = fieldsByTrack[track]

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!values.name?.trim() || !values.email?.trim()) {
      setError('Name and email are required.')
      return
    }
    submitInquiry({ track, ...values })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Inquiry recorded</h3>
        <p>
          Thanks, {values.name}. This prototype doesn’t send email yet — in the
          real build this {track} inquiry would go to {site.email}.
        </p>
      </div>
    )
  }

  return (
    <form className="form-grid" onSubmit={onSubmit} noValidate>
      {fields.map((f) => (
        <div key={f.name} className={`field ${f.full ? 'full' : ''}`}>
          <label htmlFor={`${track}-${f.name}`}>
            {f.label}
            {f.required ? ' *' : ''}
          </label>
          {f.type === 'textarea' ? (
            <textarea
              id={`${track}-${f.name}`}
              name={f.name}
              placeholder=" "
              onChange={onChange}
              value={values[f.name] ?? ''}
            />
          ) : f.type === 'select' ? (
            <select
              id={`${track}-${f.name}`}
              name={f.name}
              onChange={onChange}
              value={values[f.name] ?? ''}
            >
              <option value="">Select…</option>
              {f.options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          ) : (
            <input
              id={`${track}-${f.name}`}
              name={f.name}
              type={f.type}
              required={f.required}
              placeholder=" "
              onChange={onChange}
              value={values[f.name] ?? ''}
            />
          )}
        </div>
      ))}

      <div className="full">
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className={`btn ${track === 'investor' ? 'invest' : 'buyer'}`}>
          Send {track} inquiry
        </button>
      </div>
    </form>
  )
}
