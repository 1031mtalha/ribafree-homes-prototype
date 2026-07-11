// Single integration point for form submissions.
// TODO: wire to a real backend (email service, CRM, or serverless endpoint)
// once Atif picks one. Until then, submissions are logged locally so the
// prototype's success state can be demonstrated.

export function submitInquiry(payload) {
  console.log('[prototype] inquiry submitted:', payload)
}
