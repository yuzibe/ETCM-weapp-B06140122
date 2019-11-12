export default class Config {

  constructor(config) {

    this.cloudDevConfig = {
      isCloudDev: config.cloudDevConfig.isCloudDev,
      cloudDevId: config.cloudDevConfig.cloudDevId
    }

    // CloudServiceInitialized 
    if (this.cloudDevConfig.isCloudDev && wx.cloud) {
      const cloudId = this.cloudDevConfig.cloudDevId;
      wx.cloud.init({
        id: cloudId,
        traceUser: true
      })
      console.info('CloudServiceInitialized ' ,this.cloudDevConfig)
    }

  }
}