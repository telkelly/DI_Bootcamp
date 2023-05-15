class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    return console.log(
      `${this.uploader} watched all ${this.time} of ${this.title}`
    );
  }
    
}

const videoData = [
  ["Video 3", "User 3", 240],
  ["Video 4", "User 4", 300],
  ["Video 5", "User 5", 150],
  ["Video 6", "User 6", 200],
  ["Video 7", "User 7", 180],
];

const videos = [];
for (const data of videoData) {
  const video = new Video(data[0], data[1], data[2]);
  videos.push(video);
}

const example = new Video("The Office", "kels", "30000").watch();
const example2 = new Video("big bang theory", "kels", "50000").watch();
console.log(videos);
