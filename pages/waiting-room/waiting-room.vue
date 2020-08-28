<template>
	<view class="content"  @longpress="open" @click="open">
		<image class="bg" src="/static/logo.png" ></image>
		<view class="header">
			<view class="header-title">{{title}}</view>
			<view class="header-time">
				<view>
					<text>{{ dateText.year }}年{{ dateText.month }}月{{ dateText.date }}日</text>
				</view>
				<view>
					<text style="padding-right: 5px;">{{ dateText.day }}</text>
					<text>{{ dateText.time }}</text>
				</view>
			</view>
		</view>
		<view class="info">
			<view class="info-patient" v-for="(item,index) in data" :key="index">
				<view class="room">{{item.room}}</view>
				<view class="remark">{{item.remark}}</view>
				<view class="doctor">{{item.doctor}}</view>
				<view class="number">{{item.number}}</view>
				<view class="name">{{item.name}}</view>
				<view class="status">{{item.status}}</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center" :maskClick="false">
			<view class="popup">
				<view class="popup-header">
					设置
				</view>
				<view>
					<view class="uni-form-item ">
						<view class="popup-title">诊室：</view>
						<input class="uni-input" v-model="iType"  placeholder="请输入诊室" />
					</view>
					<view class="uni-form-item uni-form-btn">
						<button type="default" class="chooseBtn" @click="navTo()">选择页面</button>
					</view>
					<view class="uni-form-item " >
						<button class="popup-btn" @click="close">取消</button>
						<button class="popup-btn" @click="confirm">确定</button>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'
// var FvvUniTTS = uni.requireNativePlugin('Fvv-UniTTS')
export default {
	data() {
		return {
			dateText: {
				year: '',
				month: '',
				date: '',
				day: '',
				time: ''
			},
			title:'口腔科候诊室',
			weekday: [],
			data:[
				// {
				// 	room:'诊室1',
				// 	remark:'速来',
				// 	doctor:'张医生',
				// 	number:"K101",
				// 	name:'张*鑫',
				// 	status:'正在检查',
				// },
			
			],
			cliniqueCode:'',
			iType:'',
			popupShow:false,
			seqNumber:'',
			test:'测试',
			testNubmer:0,
		};
	},
	onLoad() {
		this.iType = uni.getStorageSync('iType')||'';
		let date = new Date();
		this.weekday = new Array(7);
		this.weekday[0] = '星期日';
		this.weekday[1] = '星期一';
		this.weekday[2] = '星期二';
		this.weekday[3] = '星期三';
		this.weekday[4] = '星期四';
		this.weekday[5] = '星期五';
		this.weekday[6] = '星期六';
		this.newDate();
		setTimeout(() => {
			this.newDate();
			setInterval(() => {
				this.newDate();
			}, 60000);
		}, date.getSeconds() * 1000);
		if(this.iType){
			this.init();
		}
	},
	methods: {
		//选择页面
		navTo(){
			uni.redirectTo({
				url: '../index/index',
				success: res => {
					uni.setStorageSync('pageSetBoolean',false);
				},
				fail: () => {},
				complete: () => {}
			});
		},
		//当前时间
		newDate() {
			let date = new Date();
			this.dateText = {
				year: date.getFullYear(),
				month: date.getMonth() + 1,
				date: date.getDate(),
				day: this.weekday[date.getDay()],
				time: date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
			};
		},
		// 打开设置
		open(){
			console.log(123);
			this.$refs.popup.open();
			this.popupShow = true;
		},
		// 关闭设置
		close(){
			this.$refs.popup.close();
			this.popupShow = false;
			
		},
		//确定设置
		confirm(){
			if(this.iType===''){
				uni.showToast({
					title:'请输入诊室',
					icon:'none'
				})
				return
			}
			
			uni.showLoading({
				title: '加载中',
			});
			uni.setStorageSync('iType',this.iType);
			this.popupShow = false;
			this.data = [];
			this.init();
			this.$refs.popup.close();
			uni.hideLoading();
		},
		// 初始化数据
		init(){
			if(this.popupShow){
				return false;
			}
			// 测试使用
			let data = {room:'诊室1',remark:'速来',doctor:'张医生',number:"K101",name:'张国鑫',status:'正在检查',};
			data.number = data.number + this.testNubmer++
			if(!data.name){
				setTimeout(() => {
					this.init()
				}, 3000);
				return;
			}
			let name = data.name;
			if(name.length==2){
			    name = '*'+name.slice(1,name.length)
			}else if(name.length>2){
				name = name.slice(0,1) + '*' + name.slice(name.length-1,name.length)
			}
			this.seqNumber = data.seq_number;
			let dataMap = {
				room:data.room,
				remark:data.remark,
				doctor:data.doctor,
				number:data.number,
				name:name,
				status:data.status,
			}
			// 请 票号  患者名 到 窗口名
			let number = this.chineseNumeral(dataMap.number+'');
			let speakText = `请,${number}号,${data.name}到,${data.room}`;
			console.log(speakText);
			// FvvUniTTS.init((callback) => {
			// 	FvvUniTTS.speak({
			// 		text:speakText
			// 	});
			// });
			this.onDone(speakText);
			if(this.data.length<7){
				this.data = this.data.concat(dataMap)
			}else{
				this.data[6] = dataMap; 
				this.$forceUpdate();
			}
			
			// uni.request({
			//     url: 'http://198.100.100.36:8018/Queue/Get_Queue', 
			//     // url: 'http://192.168.0.159:8018/Queue/Get_Queue', 
			// 	data:{
			// 		iType :this.iType ,
			// 	},
			// 	timeout:3000,
			//     success: (res) => {
			// 		let data = res.data.Data;
			//     },
			// 	fail:(res) => {
			// 		uni.showToast({
			// 			title:'请求失败',
			// 			icon:'none'
			// 		})
			// 	}
			// });
		},
		// 播放完执行
		onDone(data){
			let date = 4300;
			if(data.length>12){
				date = date + ((data.length - 12)*300 ) 
			}
			setTimeout(() => {
				this.init()
				// uni.request({
				//     url: 'http://198.100.100.36:8018/Queue/Set_Queue', 
				//     // url: 'http://192.168.0.159:8018/Queue/Set_Queue', 
				// 	data:{
				// 		Seq_Number:this.seqNumber,
				// 	},
				// 	timeout:3000,
				//     success: (res) => {
				// 		this.init();
				//     },
				// });
			}, date);
			
		},
		//转大写
		chineseNumeral(data){
			let tmpnewchar = "" ;
				for(let char of data){
					switch (char) {
			            case "0":   tmpnewchar =  tmpnewchar + "零" ;break;
			            case "1":  tmpnewchar =  tmpnewchar + "一" ; break;
			            case "2":  tmpnewchar =  tmpnewchar + "二" ; break;
			            case "3":  tmpnewchar =  tmpnewchar + "三" ; break;
			            case "4":  tmpnewchar =  tmpnewchar + "四" ; break;
			            case "5":  tmpnewchar =  tmpnewchar + "五" ; break;
			            case "6":  tmpnewchar =  tmpnewchar + "六" ; break;
			            case "7":  tmpnewchar =  tmpnewchar + "七" ; break;
			            case "8":  tmpnewchar =  tmpnewchar + "八" ; break;
			            case "9":  tmpnewchar =  tmpnewchar + "九" ; break;
						default: tmpnewchar = tmpnewchar + char;
			        }
			}
			return tmpnewchar;
		}
	}
};
</script>

<style>
page {
	height: 100%;
}
.uni-form-item.uni-form-btn{
	padding: 0;
}

.chooseBtn{
	font-size: 30px;
	width: 438px;
}
.header{
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 170px;
}
.room{
	width: 305px;
}
.remark{
	width: 203px;
}
.doctor{
	width: 306px;
}
.content {
	position: relative;
	height: 100%;
}
.number{
	width: 351px;
}
.status{
	width: 314px;
}
.name{
	width: 337px;
}
.bg {
	position: absolute;
	height: 1080px;
	width: 1920px;
	z-index: -1;
}
.header-time {
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	right: 20px;
	padding-top: 15px;
	top: 33px;
}

.header-time view {
	width: 360px;
	font-size: 37px;
	color: #000;
	text-align: center;
	letter-spacing:2px;
}
.info{
	padding-top: 122px;
	padding-left: 55px;
	padding-right: 55px;
}
.info-patient {
	display: flex;
	height: 102px;
}
.info-patient view {
	font-size: 60px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.popup-btn{
		font-size: 30px;
		color: #fff;
		padding-left: 40px;
		padding-right: 40px;
		background-color: rgb(68,114,196);
		margin-left: 40px;
		margin-right: 40px;
	}
	.popup{
		background-color: #fff;
		width: 600px;
		font-size: 40px;
		z-index: 100;
	}
	.popup-header{
		background-color: rgb(68,114,196);
		text-align: center;
		padding: 10px 0 ;
	}
	.uni-form-item{
		display: flex;
		align-items: center;
		padding: 40px;
		justify-content: center;
	}
	.popup-title{
		font-size: 30px;
	}
	.uni-input{
		font-size: 25px;
		border: 1px solid;
		padding: 20px 30px;
	}
</style>
