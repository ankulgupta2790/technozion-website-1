import React from 'react'
import './index.css';
import rasengan from './Rasengan.png';

const AuthPage = () => {

	function handleButtonClick() {
		window.open(
			'https://docs.google.com/forms/d/e/1FAIpQLSdS4479Bwpgb7kj_zg4rmjQgnqOlfMaToZtaxJxwL5iDtM4wg/viewform',
			'_blank'
		);
	}

	return (
		<div className='flex min-h-screen flex-col justify-center items-center bg-black' style={{ paddingTop: '25%' }}>
			<style>
				{
					'.rasengan{position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);width:250px;height:250px;perspective:1000px;background:radial-gradient(#fff 5%,#ca85b8 40%);border-radius:50%;animation:twinkling 1.5s infinite linear;}.rasengan .line{position:absolute;border:1px solid rgba(255,255,255,0.5);border-radius:50%;box-shadow:0 0 2px #fff;}.line1{top:11px;left:11px;bottom:11px;right:11px;animation:rotating 0.1s infinite linear;}.line2{top:53px;left:53px;bottom:53px;right:53px;animation:rotating 0.2s infinite linear;}.line3{top:30px;left:30px;bottom:30px;right:30px;animation:rotating 0.3s infinite linear;}.line4{top:39px;left:39px;bottom:39px;right:39px;animation:rotating 0.4s infinite linear;}.line5{top:5px;left:5px;bottom:5px;right:5px;animation:rotating 0.5s infinite linear;}.line6{top:55px;left:55px;bottom:55px;right:55px;animation:rotating 0.6s infinite linear;}.line7{top:72px;left:72px;bottom:72px;right:72px;animation:rotating 0.7s infinite linear;}.line8{top:35px;left:35px;bottom:35px;right:35px;animation:rotating 0.8s infinite linear;}.line9{top:44px;left:44px;bottom:44px;right:44px;animation:rotating 0.9s infinite linear;}.line10{top:88px;left:88px;bottom:88px;right:88px;animation:rotating 1s infinite linear;}.line11{top:84px;left:84px;bottom:84px;right:84px;animation:rotating 1.1s infinite linear;}.line12{top:39px;left:39px;bottom:39px;right:39px;animation:rotating 1.2s infinite linear;}.line13{top:77px;left:77px;bottom:77px;right:77px;animation:rotating 1.3s infinite linear;}.line14{top:60px;left:60px;bottom:60px;right:60px;animation:rotating 1.4s infinite linear;}.line15{top:43px;left:43px;bottom:43px;right:43px;animation:rotating 1.5s infinite linear;}.line16{top:76px;left:76px;bottom:76px;right:76px;animation:rotating 1.6s infinite linear;}.line17{top:13px;left:13px;bottom:13px;right:13px;animation:rotating 1.7s infinite linear;}.line18{top:17px;left:17px;bottom:17px;right:17px;animation:rotating 1.8s infinite linear;}.line19{top:70px;left:70px;bottom:70px;right:70px;animation:rotating 1.9s infinite linear;}.line20{top:6px;left:6px;bottom:6px;right:6px;animation:rotating 2s infinite linear;}.line21{top:58px;left:58px;bottom:58px;right:58px;animation:rotating 2.1s infinite linear;}.line22{top:68px;left:68px;bottom:68px;right:68px;animation:rotating 2.2s infinite linear;}.line23{top:59px;left:59px;bottom:59px;right:59px;animation:rotating 2.3s infinite linear;}.line24{top:82px;left:82px;bottom:82px;right:82px;animation:rotating 2.4s infinite linear;}.line25{top:67px;left:67px;bottom:67px;right:67px;animation:rotating 2.5s infinite linear;}.line26{top:75px;left:75px;bottom:75px;right:75px;animation:rotating 2.6s infinite linear;}.line27{top:8px;left:8px;bottom:8px;right:8px;animation:rotating 2.7s infinite linear;}.line28{top:5px;left:5px;bottom:5px;right:5px;animation:rotating 2.8s infinite linear;}.line29{top:27px;left:27px;bottom:27px;right:27px;animation:rotating 2.9s infinite linear;}.line30{top:65px;left:65px;bottom:65px;right:65px;animation:rotating 3s infinite linear;}.line31{top:62px;left:62px;bottom:62px;right:62px;animation:rotating 3.1s infinite linear;}.line32{top:73px;left:73px;bottom:73px;right:73px;animation:rotating 3.2s infinite linear;}.line33{top:36px;left:36px;bottom:36px;right:36px;animation:rotating 3.3s infinite linear;}.line34{top:29px;left:29px;bottom:29px;right:29px;animation:rotating 3.4s infinite linear;}.line35{top:87px;left:87px;bottom:87px;right:87px;animation:rotating 3.5s infinite linear;}.line36{top:44px;left:44px;bottom:44px;right:44px;animation:rotating 3.6s infinite linear;}.line37{top:63px;left:63px;bottom:63px;right:63px;animation:rotating 3.7s infinite linear;}.line38{top:53px;left:53px;bottom:53px;right:53px;animation:rotating 3.8s infinite linear;}.line39{top:50px;left:50px;bottom:50px;right:50px;animation:rotating 3.9s infinite linear;}.line40{top:63px;left:63px;bottom:63px;right:63px;animation:rotating 4s infinite linear;}.line41{top:68px;left:68px;bottom:68px;right:68px;animation:rotating 4.1s infinite linear;}.line42{top:13px;left:13px;bottom:13px;right:13px;animation:rotating 4.2s infinite linear;}.line43{top:56px;left:56px;bottom:56px;right:56px;animation:rotating 4.3s infinite linear;}.line44{top:50px;left:50px;bottom:50px;right:50px;animation:rotating 4.4s infinite linear;}.line45{top:40px;left:40px;bottom:40px;right:40px;animation:rotating 4.5s infinite linear;}.line46{top:50px;left:50px;bottom:50px;right:50px;animation:rotating 4.6s infinite linear;}.line47{top:78px;left:78px;bottom:78px;right:78px;animation:rotating 4.7s infinite linear;}.line48{top:43px;left:43px;bottom:43px;right:43px;animation:rotating 4.8s infinite linear;}.line49{top:55px;left:55px;bottom:55px;right:55px;animation:rotating 4.9s infinite linear;}.line50{top:9px;left:9px;bottom:9px;right:9px;animation:rotating 5s infinite linear;}.line51{top:14px;left:14px;bottom:14px;right:14px;animation:rotating 5.1s infinite linear;}.line52{top:88px;left:88px;bottom:88px;right:88px;animation:rotating 5.2s infinite linear;}.line53{top:69px;left:69px;bottom:69px;right:69px;animation:rotating 5.3s infinite linear;}.line54{top:74px;left:74px;bottom:74px;right:74px;animation:rotating 5.4s infinite linear;}.line55{top:16px;left:16px;bottom:16px;right:16px;animation:rotating 5.5s infinite linear;}.line56{top:9px;left:9px;bottom:9px;right:9px;animation:rotating 5.6s infinite linear;}.line57{top:21px;left:21px;bottom:21px;right:21px;animation:rotating 5.7s infinite linear;}.line58{top:88px;left:88px;bottom:88px;right:88px;animation:rotating 5.8s infinite linear;}.line59{top:36px;left:36px;bottom:36px;right:36px;animation:rotating 5.9s infinite linear;}.line60{top:88px;left:88px;bottom:88px;right:88px;animation:rotating 6s infinite linear;}.line61{top:12px;left:12px;bottom:12px;right:12px;animation:rotating 6.1s infinite linear;}.line62{top:26px;left:26px;bottom:26px;right:26px;animation:rotating 6.2s infinite linear;}.line63{top:27px;left:27px;bottom:27px;right:27px;animation:rotating 6.3s infinite linear;}.line64{top:63px;left:63px;bottom:63px;right:63px;animation:rotating 6.4s infinite linear;}.line65{top:65px;left:65px;bottom:65px;right:65px;animation:rotating 6.5s infinite linear;}.line66{top:51px;left:51px;bottom:51px;right:51px;animation:rotating 6.6s infinite linear;}.line67{top:50px;left:50px;bottom:50px;right:50px;animation:rotating 6.7s infinite linear;}.line68{top:46px;left:46px;bottom:46px;right:46px;animation:rotating 6.8s infinite linear;}.line69{top:13px;left:13px;bottom:13px;right:13px;animation:rotating 6.9s infinite linear;}.line70{top:79px;left:79px;bottom:79px;right:79px;animation:rotating 7s infinite linear;}.line71{top:76px;left:76px;bottom:76px;right:76px;animation:rotating 7.1s infinite linear;}.line72{top:14px;left:14px;bottom:14px;right:14px;animation:rotating 7.2s infinite linear;}.line73{top:22px;left:22px;bottom:22px;right:22px;animation:rotating 7.3s infinite linear;}.line74{top:70px;left:70px;bottom:70px;right:70px;animation:rotating 7.4s infinite linear;}.line75{top:37px;left:37px;bottom:37px;right:37px;animation:rotating 7.5s infinite linear;}.line76{top:64px;left:64px;bottom:64px;right:64px;animation:rotating 7.6s infinite linear;}.line77{top:44px;left:44px;bottom:44px;right:44px;animation:rotating 7.7s infinite linear;}.line78{top:35px;left:35px;bottom:35px;right:35px;animation:rotating 7.8s infinite linear;}.line79{top:75px;left:75px;bottom:75px;right:75px;animation:rotating 7.9s infinite linear;}.line80{top:5px;left:5px;bottom:5px;right:5px;animation:rotating 8s infinite linear;}.line81{top:33px;left:33px;bottom:33px;right:33px;animation:rotating 8.1s infinite linear;}.line82{top:57px;left:57px;bottom:57px;right:57px;animation:rotating 8.2s infinite linear;}.line83{top:54px;left:54px;bottom:54px;right:54px;animation:rotating 8.3s infinite linear;}.line84{top:63px;left:63px;bottom:63px;right:63px;animation:rotating 8.4s infinite linear;}.line85{top:53px;left:53px;bottom:53px;right:53px;animation:rotating 8.5s infinite linear;}.line86{top:75px;left:75px;bottom:75px;right:75px;animation:rotating 8.6s infinite linear;}.line87{top:65px;left:65px;bottom:65px;right:65px;animation:rotating 8.7s infinite linear;}.line88{top:22px;left:22px;bottom:22px;right:22px;animation:rotating 8.8s infinite linear;}.line89{top:32px;left:32px;bottom:32px;right:32px;animation:rotating 8.9s infinite linear;}.line90{top:20px;left:20px;bottom:20px;right:20px;animation:rotating 9s infinite linear;}.line91{top:53px;left:53px;bottom:53px;right:53px;animation:rotating 9.1s infinite linear;}.line92{top:5px;left:5px;bottom:5px;right:5px;animation:rotating 9.2s infinite linear;}.line93{top:21px;left:21px;bottom:21px;right:21px;animation:rotating 9.3s infinite linear;}.line94{top:89px;left:89px;bottom:89px;right:89px;animation:rotating 9.4s infinite linear;}.line95{top:19px;left:19px;bottom:19px;right:19px;animation:rotating 9.5s infinite linear;}.line96{top:28px;left:28px;bottom:28px;right:28px;animation:rotating 9.6s infinite linear;}.line97{top:14px;left:14px;bottom:14px;right:14px;animation:rotating 9.7s infinite linear;}.line98{top:62px;left:62px;bottom:62px;right:62px;animation:rotating 9.8s infinite linear;}.line99{top:78px;left:78px;bottom:78px;right:78px;animation:rotating 9.9s infinite linear;}@keyframes rotating{0%{transform:rotateY(0)}100%{transform:rotateZ(360deg) rotateX(360deg) rotateY(360deg)}}@keyframes twinkling{0%,100%{box-shadow:0 0 3px 0px #fff,0 0 30px 15px #ca85b8}20%{box-shadow:0 0 3px 1px #fff,0 0 30px 10px #ca85b8}40%{box-shadow:0 0 5px 0px #fff,0 0 20px 15px #ca85b8}60%{box-shadow:0 0 3px 1px #fff,0 0 30px 15px #ca85b8}80%{box-shadow:0 0 5px 0px #fff,0 0 25px 10px #ca85b8}}'
				}
			</style>
			<img className='rasenganIMG' src={rasengan} alt="rasengan" style={{ 'position': 'absolute', 'top': '5%', 'zIndex': '1' }} />
			<div id="R" className="rasengan">

				<link rel="stylesheet" href='./index.css' />
				<div className="line line1"></div>
				<div className="line line2"></div>
				<div className="line line3"></div>
				<div className="line line4"></div>
				<div className="line line5"></div>
				<div className="line line6"></div>
				<div className="line line7"></div>
				<div className="line line8"></div>
				<div className="line line9"></div>
				<div className="line line10"></div>
				<div className="line line11"></div>
				<div className="line line12"></div>
				<div className="line line13"></div>
				<div className="line line14"></div>
				<div className="line line15"></div>
				<div className="line line16"></div>
				<div className="line line17"></div>
				<div className="line line18"></div>
				<div className="line line19"></div>
				<div className="line line20"></div>
				<div className="line line21"></div>
				<div className="line line22"></div>
				<div className="line line23"></div>
				<div className="line line24"></div>
				<div className="line line25"></div>
				<div className="line line26"></div>
				<div className="line line27"></div>
				<div className="line line28"></div>
				<div className="line line29"></div>
				<div className="line line30"></div>
				<div className="line line31"></div>
				<div className="line line32"></div>
				<div className="line line33"></div>
				<div className="line line34"></div>
				<div className="line line35"></div>
				<div className="line line36"></div>
				<div className="line line37"></div>
				<div className="line line38"></div>
				<div className="line line39"></div>
				<div className="line line40"></div>
				<div className="line line41"></div>
				<div className="line line42"></div>
				<div className="line line43"></div>
				<div className="line line44"></div>
				<div className="line line45"></div>
				<div className="line line46"></div>
				<div className="line line47"></div>
				<div className="line line48"></div>
				<div className="line line49"></div>
				<div className="line line50"></div>
				<div className="line line51"></div>
				<div className="line line52"></div>
				<div className="line line53"></div>
				<div className="line line54"></div>
				<div className="line line55"></div>
				<div className="line line56"></div>
				<div className="line line57"></div>
				<div className="line line58"></div>
				<div className="line line59"></div>
				<div className="line line60"></div>
				<div className="line line61"></div>
				<div className="line line62"></div>
				<div className="line line63"></div>
				<div className="line line64"></div>
				<div className="line line65"></div>
				<div className="line line66"></div>
				<div className="line line67"></div>
				<div className="line line68"></div>
				<div className="line line69"></div>
				<div className="line line70"></div>
				<div className="line line71"></div>
				<div className="line line72"></div>
				<div className="line line73"></div>
				<div className="line line74"></div>
				<div className="line line75"></div>
				<div className="line line76"></div>
				<div className="line line77"></div>
				<div className="line line78"></div>
				<div className="line line79"></div>
				<div className="line line80"></div>
				<div className="line line81"></div>
				<div className="line line82"></div>
				<div className="line line83"></div>
				<div className="line line84"></div>
				<div className="line line85"></div>
				<div className="line line86"></div>
				<div className="line line87"></div>
				<div className="line line88"></div>
				<div className="line line89"></div>
				<div className="line line90"></div>
				<div className="line line91"></div>
				<div className="line line92"></div>
				<div className="line line93"></div>
				<div className="line line94"></div>
				<div className="line line95"></div>
				<div className="line line96"></div>
				<div className="line line97"></div>
				<div className="line line98"></div>
				<div className="line line99"></div>
				<div className="line line100"></div>
			</div>
			<div id='regi' className="main flex justify-center">
				<button className="btn35" onClick={handleButtonClick}>
					<span>
						Register
					</span>
				</button>
			</div>
		</div >
	)
}
export default AuthPage