export class Adq {

    /**
     * 腾讯广告 Api 版本
     */
    protected apiVersion = 'v1.3'

    protected productionUrl = 'https://api.e.qq.com/'
    protected sanboxUrl = 'https://sandbox-api.e.qq.com/'
    protected url = ''
    
    /**
     * 使用生产环境
     */
    public useProduction() {
        this.url = `${this.productionUrl}/${this.apiVersion}/`
    }

    /**
     * 使用沙盒
     */
    public useSandbox() {
        this.url = `${this.sanboxUrl}/${this.apiVersion}/`
    }

    /**
     * 初始化
     */
    public init() {}
}
