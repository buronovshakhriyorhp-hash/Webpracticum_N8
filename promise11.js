class RateLimiter {
  constructor(maxRequests, interval) {
    this.maxRequests = maxRequests; 
    this.interval = interval;       
    this.tokens = maxRequests;      
    this.queue = [];               
    this.lastReset = Date.now();    
  }

  async execute(promiseFn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ promiseFn, resolve, reject });
      this._processQueue();
    });
  }

  _processQueue() {
    const now = Date.now();
    if (now - this.lastReset >= this.interval) {
      this.tokens = this.maxRequests;
      this.lastReset = now;
    }

    while (this.queue.length > 0 && this.tokens > 0) {
      this.tokens--;
      const { promiseFn, resolve, reject } = this.queue.shift();

      promiseFn()
        .then(resolve)
        .catch(reject)
        .finally(() => {});
    }
    if (this.queue.length > 0) {
      const waitTime = this.interval - (now - this.lastReset);
      setTimeout(() => this._processQueue(), waitTime);
    }
  }
}
const limiter = new RateLimiter(3, 1000); // 1 soniyada max 3 ta so'rov

const mockRequest = (id) => {
  return () => new Promise(resolve => {
    console.log(`So'rov ${id} bajarilmoqda... ${new Date().toLocaleTimeString()}`);
    setTimeout(() => resolve(`Natija ${id}`), 100);
  });
};

// Bir vaqtning o'zida 10 ta so'rov yuboramiz
for (let i = 1; i <= 10; i++) {
  limiter.execute(mockRequest(i)).then(console.log);
}