function StopWatch() {
    let startTime;
    let stopTime;
    let duration = 0;
    let running = false;
    
    this.start = function() {
        if (running)
            throw new Error('StopWatch already running.');

        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error('StopWatch is not yet started.');

        running = false;
        stopTime = new Date();
        const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds; 
    };

    this.reset = function() {
        startTime = null;
        stopTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: () => duration
    });
}