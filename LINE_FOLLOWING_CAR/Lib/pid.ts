// lib/pid.ts

export class PID {
  private kp: number; 
  private ki: number; 
  private kd: number;

  private integ = 0;       // integral term
  private prevError = 0;   // previous error
  private first = true;    // first update flag

  constructor(kp: number, ki: number, kd: number) {
    this.kp = kp;
    this.ki = ki;
    this.kd = kd;
  }

  // update gains dynamically
  set(kp: number, ki: number, kd: number) {
    this.kp = kp;
    this.ki = ki;
    this.kd = kd;
  }

  // compute new control output
  update(error: number, dt: number) {
    this.integ += error * dt;

    // derivative term
    const deriv = this.first ? 0 : (error - this.prevError) / Math.max(dt, 1e-6);

    this.first = false;
    this.prevError = error;

    // anti-windup clamp for integral
    this.integ = Math.max(-5, Math.min(5, this.integ));

    // PID output
    return this.kp * error + this.ki * this.integ + this.kd * deriv;
  }

  // reset PID state
  reset() {
    this.integ = 0;
    this.prevError = 0;
    this.first = true;
  }
}
