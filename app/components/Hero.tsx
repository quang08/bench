import Image from "next/image";
import logo from "@/app/data/lgoo.png";

export default function Hero() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
      <Image
        src={logo}
        alt="Logo"
        className="mb-10 w-48 md:w-64 lg:w-80"
        priority
      />
      <div className="w-full text-left">
        <p className="font-intel-mono indent-8 text-justify text-sm text-white md:text-base lg:text-lg">
          Từ cái ghế của Tom Hansen ở Los Angeles cho đến cái ghế đá của Nguyễn Hữu Bảo ở Hà Nội, hiển nhiên một điều là trong đời sống đô thị chật chội ngày nay, để có được một chút riêng tư ngắn ngủi và quý giá thì ai cũng cần phải biết cách mà chiếm hữu lấy một phần không gian công cộng làm chỗ riêng cho mình. Và dù có được tính trước hay không thì cái thành phố ấy cũng có những chỗ như vậy để dành cho thị dân của mình. ở Leipzig, Tomiyasu Hayahis quan sát một cái bàn bóng bàn trong bốn năm trời và thấy người dân địa phương sử dụng nó với đủ các mục đích khác nhau mà anh cho là kỳ quái và tuyệt vời, nhưng hơn cả là chúng chả liên quan gì đến việc chơi bóng bàn hết.
        </p>
        <p className="font-intel-mono mt-6 indent-8 text-justify text-sm text-white md:text-base lg:text-lg">
          Trong quá trình đi tìm cho mình một địa điểm phù hợp để chiếm hữu và gán nghĩa làm nơi trốn cho mình như thế, tôi tình cờ tìm ra một cái ghế không tựa nằm dưới ba cái cây nhỏ dần đều này. Tôi luôn thấy nó từ xa nhưng lúc nào cũng có người ngồi. Tôi vừa quan sát như Tomiyasu Hayahis, tôi vừa lại gần tham dự. Và quả thật, có trẻ con và có người già, cũng có người hẹn hò và có người ăn-trưa một mình, rồi lại có người này ngồi thiền và có người khác ngồi nhậu nữa... Thế nó đúng là một địa điểm như thế rồi, <i>eureka (!)</i> Một ngày tôi quay lại và nhận ra hai điều, mình đã đến rất gần với nó từ lúc nào không hay, và <b>nó trống (?)</b>. Đến lượt mình rồi sao, mình sẽ làm gì với nó đây? Tôi nghĩ bụng, với tất cả những hoạt động kỳ quái và tuyệt vời mà tôi đã được gợi ý, thì tôi sẽ làm gì để bõ những ngày chờ đợi đây... Thế rồi tôi chụp ảnh nó, ngồi thử rồi đứng dậy đi về và sau những lần quay lại sau đấy với những người khác và mục đích khác, thì tôi quyết định sẽ làm quyển mini-zine này để kể cho mọi người về cái ghế đá của tôi.
        </p>
        <div className="font-intel-mono mt-6 flex justify-between text-xs text-white md:text-sm lg:text-base">
          <span>Hà Nội, 2026.</span>
          <span>Trần Trung</span>
        </div>
      </div>
    </section>
  );
}
