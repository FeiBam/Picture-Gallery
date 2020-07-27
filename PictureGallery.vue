<template>
    <div>
        <div class="Picture-box">
            <template v-for="item in PictureObjectArr">
                <div :key="item.id" class="Picture-item-box">
                    <img class="Picture" :src="item.picture">
                    <div @click="PictureChange(item.id)" class="Picture-over-box flex-center-box">
                        <h4 class="flex-center-box">点击放大</h4>
                    </div>
                </div>
            </template>
        </div>
        <div class="Picture-Gallery-box" v-show="GalleryIsShow">
            <div class="Picture-Gallery-info-box flex-center-box">
                <h3 style="margin: 0;color: white">{{PictureTitle}}</h3>
                <a style="color: white;font-size: x-small">{{PictureInfo}}</a>
                <i style="position: absolute;right: 20px;top: 20px;color: white;cursor: pointer" @click="GalleryShowChange()"><svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i>
            </div>
            <div style="width: 100%;height: 100%">
                <template v-for="item in PictureObjectArr">
                    <div class="Picture-Gallery-item-box flex-box" :class="[item.isShow ? 'Picture-isShow' : 'Picture-unShow']" :key="item.id">
                        <img style="max-width: 100%;max-height: 100%;position: absolute" :src="item.picture">
                    </div>
                </template>
            </div>
            <div class="Picture-Gallery-select-box flex-center-box">
                <i @click="PictureChange(undefined,'next')"><svg viewBox="64 64 896 896" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></i>
                <i @click="GallerPreviewIsShow = true"><svg viewBox="64 64 896 896" data-icon="appstore" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zM464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z"></path></svg></i>
                <i @click="PictureChange(undefined,'previous')"><svg viewBox="64 64 896 896" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg></i>
            </div>
            <div :class="[GallerPreviewIsShow ? 'Picture-Gallery-preview-box-isShow' : 'Picture-Gallery-preview-box-unShow']" class="Picture-Gallery-preview-box">
                <div class="Picture-Gallery-preview-info">
                    <a style="font-weight: bold;font-size: 12px;color: white">All photos({{PictureNum}})</a>
                    <i style="color: white;cursor: pointer" @click="GallerPreviewIsShow = false"><svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i>
                </div>
                <div class="Picture-Gallery-select-item-box flex-box">
                    <template v-for="item in PictureObjectArr">
                        <div @click="PictureChange(item.id)" style="cursor: pointer" :class="{'Picture-Gallery-select-item-box-isActive' : item.isShow}" :key="item.id">
                            <img style="height: 100%" :src="item.picture">
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    Array.prototype.next = function(arrItem){
      const index = this.indexOf(arrItem)
      if (index === this.length -1){
        return this[0]
      }
      else {
        return this[index+1]
      }
    }
    Array.prototype.previous = function(arrItem){
      const index = this.indexOf(arrItem)
      if (index === 0){
        return this[this.length-1]
      }
      else {
        return this[index-1]
      }
    }
    export default {
        name: "PictureGallery",
        props:{
            PictureArr:{
                type:Array
            },
        },
        data(){
            return{
                PictureObjectArr:[],
                GalleryIsShow:false,
                GallerPreviewIsShow:false,
                PictureShow:false,
                PictureTitle:'',
                PictureInfo:'',
            }
        },
        methods:{
            init:function () {
                this.PictureArrInit()
            },
            //初始化对象转换
            PictureArrInit:function () {
                this.PictureArr.forEach((item,index)=>{
                    let object = {}
                    let about = {}
                    if (typeof item !== 'object'){
                        throw EvalError('picture item need be a object')
                    }
                    else {
                        about['title'] = item['title']
                        about['info'] = item['info']
                        object['about'] = about
                        object['picture'] = item.picture
                    }
                    object['id'] = index
                    object['isShow'] = false
                    this.PictureObjectArr.push(object)
                })
                this.PictureObjectArr[0].isShow = true
            },
            //图片切换方法
            PictureChange:function (index,type) {
                if (typeof index !== 'undefined'){
                    this.GalleryShowChange('open')
                    this.PictureMessageSet(this.PictureObjectArr[index].about.title,this.PictureObjectArr[index].about.info)
                    if (this.PictureObjectArr[index].isShow === true){
                        return false
                    }
                    else {
                        this.PictureUnShow()
                        this.PictureObjectArr[index].isShow = true
                    }
                }
                else if (typeof type !== 'undefined'){
                    const unShowItem = this.PictureUnShow()
                    if (type === 'next'){
                        this.PictureObjectArr.next(unShowItem).isShow = true
                        this.PictureMessageSet(this.PictureObjectArr.next(unShowItem).about.title,this.PictureObjectArr.next(unShowItem).about.info)
                    }
                    else {
                        this.PictureObjectArr.previous(unShowItem).isShow = true
                        this.PictureMessageSet(this.PictureObjectArr.previous(unShowItem).about.title,this.PictureObjectArr.next(unShowItem).about.info)
                    }
                }
            },
            //隐藏图片方法
            PictureUnShow:function(){
                for (let item of this.PictureObjectArr){
                    if (item.isShow){
                        this.PictureObjectArr[this.PictureObjectArr.indexOf(item)].isShow = false
                        return this.PictureObjectArr[this.PictureObjectArr.indexOf(item)]
                    }
                }
            },
            //设置图片介绍方法
            PictureMessageSet:function(title,info){
                this.PictureTitle = title
                this.PictureInfo = info
            },
            //画廊显示切换方法
            GalleryShowChange:function (type = 'close') {
                if (type === 'open'){
                    document.body.style.overflow = 'hidden'//固定滚动条 防止显示画廊的时候可以滚动被遮住页面
                    this.GalleryIsShow = true
                }
                else {
                    this.PictureUnShow()
                    setTimeout(()=>{ //延时解锁滚动条 延时是为了让图像过度动画完成
                        this.GallerPreviewIsShow = false
                        this.GalleryIsShow = false
                        document.body.style.overflow = 'auto'},400)
                }
            },
            
        },
        mounted() {
            this.init()
        },
        computed: {
            PictureNum:function () {
                return this.PictureObjectArr.length
            },
        }
    }
</script>
<style scoped>
    .Picture-box{
        display: flex;
        flex-flow: row;
        width: auto;
        height: auto;
    }
    .Picture-item-box{
        position: relative;
        padding: 8px;
        width: 33%;
        height: auto;
    }
    .Picture{
        max-width: 100%;
    }
    .Picture-over-box{
        cursor: pointer;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.45);
        position: absolute;
        width: calc(100% - 16px);
        height: calc(100% - 19px);
        top: 8px;
        left: 8px;
        transition: all 300ms ease-out;
    }
    .Picture-over-box > h4{
        transition: all 300ms ease-out;
        transform: translateY(30px);
        width: 50%;
        height: 16%;
        margin: 0;
        color: white;
        background-color: #ff5000;
        font-size: 1.6rem;
        font-weight: 500;
    }
    .Picture-over-box:hover{
        opacity: 1;
    }
    .Picture-over-box:hover > h4{
        transform: translateY(0);
    }
    .Picture-Gallery-box{
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0d0d0d;
    }
    .Picture-Gallery-info-box{
        flex-flow: column;
        width: 100%;
        height: auto;
        padding: 10px;
        background-color:rgba(0, 0, 0, 0.55);
    }
    .Picture-Gallery-item-box{
        transition: 400ms;
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
    }
    .Picture-Gallery-select-box{
        position: absolute;
        width: 100%;
        height: 32px;
        left: 0;
        bottom: 20px;
    }
    .Picture-Gallery-select-box > i{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2px;
        width: 30px;
        height: 30px;
        color: white;
        background-color: rgba(0, 0, 0, 0.65);
    }
    .Picture-Gallery-select-box > i:hover{
        background-color: #000000;
    }
    .Picture-Gallery-preview-box{
        transition: 0.4s;
        position: absolute;
        width: 100%;
        height: auto;
        left: 0;
        bottom: 0;
    }
    .Picture-Gallery-preview-info{
        display: flex;
        justify-content:space-between ;
        background-color: #333;
        padding: 8px;
    }
    .Picture-Gallery-select-item-box{
        padding: 8px;
        background-color: black;
    }
    .Picture-Gallery-select-item-box > div{
        transition: border-color linear 0.4s, opacity cubic-bezier(0.4, 0, 1, 1) .2s;
        height: 96px;
        width: 96px;
        overflow: hidden;
        opacity: 0.65;
        margin: 3px;
        border: 4px solid transparent;
        border-radius: 4px;
    }
    .Picture-Gallery-select-item-box > div:hover{
        border-color: white;
        opacity: 1;
    }
    .Picture-Gallery-select-item-box-isActive{
        border-color: white!important;
        opacity: 1!important;
    }
    .Picture-isShow{
        opacity: 1;
        transform: scale(1);
    }
    .Picture-unShow{
        opacity: 0;
        transform: scale(0.5);
    }
    .Picture-Gallery-preview-box-isShow{
        transform: translateY(0);
    }
    .Picture-Gallery-preview-box-unShow{
        transform: translateY(100%);
    }
    @media screen and (max-width: 768px){
        .Picture-item-box{
            position: relative;
            padding: 8px;
            width: 100%;
            height: auto;
        }
        .Picture-box{
            flex-flow: column;
        }
    }
    @media screen and (min-width: 768px){
        .Picture-item-box{
            position: relative;
            padding: 8px;
            width: 50%;
            height: auto;
        }
    }
    @media screen and (min-width: 992px){
        .Picture-item-box{
            position: relative;
            padding: 8px;
            width: 33%;
            height: auto;
        }
    }
    @media screen and (min-width: 1200px){
        .Picture-item-box{
            position: relative;
            padding: 8px;
            width: 25%;
            height: auto;
        }
    }
</style>
