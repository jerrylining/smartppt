export class Rect {
    constructor(public x: number, public y: number, public width: number, public height: number) {

    }

    /**
     * 计算矩形面积
     */
    area(): number {
        return this.width * this.height;
    }

    /**
     * 判断两个矩形是否相交
     */
    intersects(other: Rect): boolean {
        return !(other.x > this.x + this.width ||
                 other.x + other.width < this.x ||
                 other.y > this.y + this.height ||
                 other.y + other.height < this.y);
    }

    /**
     * 判断矩形是否包含某个点
     */
    contains(x: number, y: number): boolean {
        return x >= this.x && 
               x <= this.x + this.width &&
               y >= this.y && 
               y <= this.y + this.height;
    }

    /**
     * 判断是否完全包含另一个矩形
     */
    containsRect(other: Rect): boolean {
        return other.x >= this.x &&
               other.y >= this.y &&
               other.x + other.width <= this.x + this.width &&
               other.y + other.height <= this.y + this.height;
    }

    /**
     * 获取矩形中心点坐标
     */
    getCenter(): { x: number; y: number } {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        };
    }

    /**
     * 获取矩形右边界坐标
     */
    get right(): number {
        return this.x + this.width;
    }

    /**
     * 获取矩形底边界坐标
     */
    get bottom(): number {
        return this.y + this.height;
    }

    /**
     * 获取矩形左边界坐标
     */
    get left(): number {
        return this.x;
    }

    /**
     * 获取矩形顶边界坐标
     */
    get top(): number {
        return this.y;
    }

    /**
     * 移动矩形到新位置
     */
    moveTo(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    /**
     * 按偏移量移动矩形
     */
    moveBy(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    /**
     * 调整矩形大小
     */
    resize(width: number, height: number): void {
        this.width = width;
        this.height = height;
    }

    /**
     * 缩放矩形
     */
    scale(factor: number): void {
        const center = this.getCenter();
        this.width *= factor;
        this.height *= factor;
        this.x = center.x - this.width / 2;
        this.y = center.y - this.height / 2;
    }

    /**
     * 克隆矩形
     */
    clone(): Rect {
        return new Rect(this.x, this.y, this.width, this.height);
    }

    /**
     * 获取与另一个矩形的交集区域
     */
    intersection(other: Rect): Rect | null {
        if (!this.intersects(other)) {
            return null;
        }

        const x = Math.max(this.x, other.x);
        const y = Math.max(this.y, other.y);
        const right = Math.min(this.right, other.right);
        const bottom = Math.min(this.bottom, other.bottom);

        return new Rect(x, y, right - x, bottom - y);
    }

    /**
     * 获取包含两个矩形的最小矩形（并集）
     */
    union(other: Rect): Rect {
        const x = Math.min(this.x, other.x);
        const y = Math.min(this.y, other.y);
        const right = Math.max(this.right, other.right);
        const bottom = Math.max(this.bottom, other.bottom);

        return new Rect(x, y, right - x, bottom - y);
    }

    /**
     * 判断矩形是否为空（宽度或高度为0）
     */
    isEmpty(): boolean {
        return this.width === 0 || this.height === 0;
    }

    /**
     * 获取矩形的周长
     */
    perimeter(): number {
        return 2 * (this.width + this.height);
    }

    /**
     * 转换为字符串表示
     */
    toString(): string {
        return `Rect(x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height})`;
    }

    /**
     * 转换为普通对象
     */
    toObject(): { x: number; y: number; width: number; height: number } {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        };
    }

    /**
     * 从普通对象创建矩形
     */
    static fromObject(obj: { x: number; y: number; width: number; height: number }): Rect {
        return new Rect(obj.x, obj.y, obj.width, obj.height);
    }
}