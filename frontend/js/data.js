// ZaniQ IWMS v2.0 - Demo Data
// This file contains all the static content for the demo
// In production, this would come from the API

const DEMO_DATA = {
  // Dashboard KPIs
  kpis: {
    workOrders: { value: 86, change: +9, period: 'vs last week', critical: 5 },
    spaceUtil: { value: 71, change: +3, note: 'HEMIS return ready' },
    residenceOccupancy: { value: 96, note: 'Campus res · NSFAS reconciled' },
    standbyGen: { value: 64, note: '≈31 hrs runtime at Stage 2' },
  },

  // Priority Work Orders
  workOrders: [
    { asset: 'Water pump WP-03', location: 'South Campus · bulk store', issue: 'Potable feed pressure drop', priority: 'Critical', sla: '1h 05m' },
    { asset: 'Chiller CH-02', location: 'Central Campus', issue: 'Lab cold-storage temp rising', priority: 'Critical', sla: '2h 20m' },
    { asset: 'Generator GEN-01', location: 'South Campus · plant', issue: 'Low fuel before shedding window', priority: 'High', sla: '4h 30m' },
    { asset: 'Lift LFT-04', location: 'Library, Central', issue: 'Door sensor intermittent', priority: 'High', sla: 'Today' },
    { asset: 'Geyser bank GB-11', location: 'Residence · West wing', issue: 'No hot water, 2nd floor', priority: 'High', sla: 'Today' },
    { asset: 'AHU-07', location: 'North Campus · admin', issue: 'Filter service due', priority: 'Planned', sla: 'Fri' },
  ],

  // Space Utilization
  spaceUtil: [
    { name: 'Lecture venues', pct: 84, color: 'var(--acc2)' },
    { name: 'Laboratories', pct: 73, color: 'var(--acc2)' },
    { name: 'Library', pct: 66, color: 'var(--gold)' },
    { name: 'Seminar rooms', pct: 47, color: 'var(--gold)' },
    { name: 'Offices', pct: 41, color: 'var(--acc)' },
  ],

  // Residence Snapshot
  residence: {
    occupied: 96,
    openReq: 19,
    nsfasDue: 'R1.4m',
  },

  // Maintenance Stats
  maintenance: {
    slaMet: 92,
    avgClose: '3.4d',
    plannedPct: 61,
  },

  // Backlog Chart Data
  backlog: [
    { day: 'Mon', open: 43, closed: 38, height: 65 },
    { day: 'Tue', open: 51, closed: 45, height: 75 },
    { day: 'Wed', open: 47, closed: 49, height: 70 },
    { day: 'Thu', open: 39, closed: 42, height: 60 },
    { day: 'Fri', open: 45, closed: 40, height: 68 },
    { day: 'Sat', open: 28, closed: 25, height: 45 },
    { day: 'Sun', open: 22, closed: 20, height: 35 },
  ],

  // Residence Register
  residences: [
    { name: 'Residence A', campus: 'Central', beds: 412, occupied: '98%', status: 'Current' },
    { name: 'Residence B', campus: 'South', beds: 386, occupied: '97%', status: 'Current' },
    { name: 'Residence C', campus: 'South', beds: 298, occupied: '95%', status: 'Current' },
    { name: 'Residence D', campus: 'North', beds: 204, occupied: '89%', status: 'Current' },
    { name: 'Accredited provider 07', campus: 'Off-campus', beds: 120, occupied: '100%', status: 'Renews 90d' },
    { name: 'Accredited provider 11', campus: 'Off-campus', beds: 85, occupied: '94%', status: 'Under review' },
  ],

  // Energy & Water
  energy: {
    stage: 2,
    nextWindow: '18:00–20:30',
    genFuel: 64,
    runtime: '≈31 hrs at Stage 2',
    waterStored: 78,
    waterNote: 'Campus reservoir',
    anomalies: 'Possible leak · Central',
  },

  // Generators
  generators: [
    { campus: 'South Campus', standby: 'GEN-01 · plant building', fuel: 64, runtime: '≈31 hrs', status: 'Ready' },
    { campus: 'Central Campus', standby: 'GEN-02', fuel: 41, runtime: '≈17 hrs', status: 'Refuel' },
    { campus: 'North Campus', standby: 'GEN-03', fuel: 72, runtime: '≈29 hrs', status: 'Ready' },
    { campus: 'Library UPS', standby: 'UPS bank', fuel: null, runtime: '≈45 min', status: 'Ready' },
  ],

  // Water Streams
  waterStreams: [
    { name: 'Potable store', pct: 78, color: 'var(--acc2)' },
    { name: 'Fire reserve', pct: 94, color: 'var(--acc2)' },
    { name: 'Grey-water', pct: 52, color: 'var(--gold)' },
    { name: 'Municipal feed', pct: 66, color: 'var(--gold)' },
  ],

  // Space & Bookings
  buildings: [
    { name: 'Academic block', campus: 'Central', function: 'Lecture & seminar', util: '84%', status: 'Optimal' },
    { name: 'Library', campus: 'Central', function: 'Study & collections', util: '66%', status: 'Good' },
    { name: 'Science labs', campus: 'Central', function: 'Teaching labs', util: '73%', status: 'Good' },
    { name: 'Administration', campus: 'North', function: 'Offices', util: '41%', status: 'Underused' },
    { name: 'Sports & welfare', campus: 'South', function: 'Recreation', util: '58%', status: 'Good' },
  ],

  // Safety & Compliance
  compliance: {
    openIncidents: 1,
    note: 'under investigation',
    fireEquip: 97,
    fireNote: 'In-date service',
    inspectionsDue: 3,
    inspectionsNote: 'Next 30 days',
    popiaStatus: 'Current & auditable',
  },

  // Compliance Registers
  registers: [
    { name: 'OHS incidents', basis: 'OHS Act 85 of 1993', frequency: 'Continuous', status: 'Current' },
    { name: 'Fire equipment', basis: 'SANS / municipal', frequency: 'Monthly & annual', status: 'Current' },
    { name: 'Emergency evacuation', basis: 'OHS Act', frequency: 'Per semester', status: 'Due' },
    { name: 'Lift certificates', basis: 'Statutory', frequency: 'Annual', status: 'Current' },
    { name: 'Pressure vessels', basis: 'Statutory', frequency: 'Annual', status: 'Current' },
    { name: 'POPIA processing', basis: 'POPIA', frequency: 'Continuous', status: 'Current' },
  ],

  // Vendors & B-BBEE
  vendors: [
    { name: 'Vendor A', trade: 'Electrical', bbee: 'Level 1', csd: 'Verified', sla: '94%' },
    { name: 'Vendor B', trade: 'Plumbing & pumps', bbee: 'Level 2', csd: 'Verified', sla: '89%' },
    { name: 'Vendor C', trade: 'HVAC', bbee: 'Level 4', csd: 'Verified', sla: '91%' },
    { name: 'Vendor D', trade: 'Lifts', bbee: 'Level 4', csd: 'Verified', sla: '96%' },
    { name: 'Vendor E', trade: 'Generators', bbee: 'Level 2', csd: 'Expiring', sla: '87%' },
  ],

  // B-BBEE Procurement
  procurement: [
    { level: 'Level 1–2', pct: 58, color: 'var(--acc2)' },
    { level: 'Level 3–4', pct: 31, color: 'var(--gold)' },
    { level: 'Level 5–8', pct: 8, color: 'var(--acc)' },
    { level: 'Non-compliant', pct: 3, color: 'var(--dim)' },
  ],
};

// Freeze data to prevent modifications
Object.freeze(DEMO_DATA);

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DEMO_DATA;
}
