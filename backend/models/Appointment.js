import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  doctor: String,
  specialty: String
});

export default mongoose.model('Appointment', appointmentSchema);
