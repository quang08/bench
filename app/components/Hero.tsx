import Image from "next/image";
import logo from "@/app/data/lgoo.png";
import img1b from "@/app/data/1b.jpg";
import ImageGrid from "@/app/components/ImageGrid";
import { GRID_3X3_IMAGES, GRID_2X4_IMAGES } from "@/app/data/images";

const CAPTION_CLASS =
  "mx-auto w-3/4 pb-4 pt-1 text-center font-thin font-intel-mono text-xs text-white italic lg:text-sm";

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
        <p className="font-intel-mono indent-8 text-justify text-xs text-white md:text-base lg:text-lg">
          Chúng ta gán nghĩa, cá nhân hoá và chiếm hữu một vật thể hay một không gian công cộng trong lúc sử dụng nó như một nhu cầu thiết yếu của những thị dân sinh sống tại các thành phố lớn. Họ bị cuốn trôi theo những dòng chảy không hồi kết của công việc và trách nhiệm, rồi lại bị hành hạ hằng ngày bởi cảnh tắc đường và làm phiền bởi tiếng ồn từ công trường và hàng vạn thứ đau đầu khác trong đời sống đô thị. Họ cần có những khoảng nghỉ và nơi chốn để thoát ra khỏi cái vòng lặp ấy và nhận ra mình giữa hàng trăm nghìn người khác đang vật lộn xung quanh.
        </p>

        <p className="mt-4 font-intel-mono  text-justify text-xs text-white md:text-base lg:text-lg">Từ cái ghế của Tom Hansen ở Los Angeles cho đến cái ghế đá trong ảnh của Nguyễn Hữu Bảo ở Hà Nội, hành động gán nghĩa và chiếm hữu ấy khiến chúng ta cảm thấy có cảm giác thuộc về và thành phố này vẫn có chỗ dành cho mình mặc cho sự đông đúc quá tải của nó. Vì vậy, mọi sự khó chịu nêu trên nhìn chung vẫn có thể chịu được.</p>

        <div className="-mx-4 mt-6 sm:-mx-6 lg:-mx-8">
          <ImageGrid title="" images={GRID_3X3_IMAGES} cols={3} aspect="video" />
          <p className={CAPTION_CLASS}>
            Ghế yêu thích của Tom Hansen ở Angels Knoll phim 500 days of summer
          </p>

          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video w-3/4 mx-auto overflow-hidden">
              <Image src={img1b} alt="Bench in flood" fill className="object-cover" />
            </div>
          </div>
          <p className={CAPTION_CLASS}>
            Ghế đá Hà Nội ngày ngập nước trong ảnh của Nguyễn Hữu Bảo
          </p>

          <p className="px-4 sm:px-6 lg:px-8 font-intel-mono text-justify text-xs text-white md:text-base lg:text-lg">
            Ở Leipzig, Tomiyasu Hayahisa đã dành ra bốn năm để quan sát một chiếc bàn bóng bàn. Từ một lần tình cờ gặp lại con cáo ở gần bàn bóng bàn sau khi thấy nó trong lúc đi dạo, anh quay lại đó hằng ngày với hi vọng sẽ có những cuộc gặp gỡ tiếp theo. Tuy rằng con cáo không bao giờ xuất hiện nữa, nhưng anh lại thấy người dân địa phương sử dụng chiếc bàn bóng bàn đó với đủ mọi mục đích thú vị khác nhau. Điều này đã gây ra một sự hứng thú lớn cho Tomiyasu Hayahisa và anh quay lại đó chụp ảnh hằng ngày.
          </p>

          <ImageGrid title="" images={GRID_2X4_IMAGES.slice(0, 4)} cols={2} aspect="portrait" />
          <p className={CAPTION_CLASS}>
            Bàn bóng bàn của Tomiyasu Hayahis ở Leipzig trong dự án Tischtennisplatte
          </p>
        </div>

        <p className="font-intel-mono text-justify text-xs text-white md:text-base lg:text-lg">
          Trong quá trình đi tìm cho mình một địa điểm phù hợp để gán nghĩa và chiếm hữu làm nơi chốn cho mình, tôi tìm ra một cái ghế không tựa nằm dưới ba cái cây nhỏ dần đều này. Tôi luôn để ý nó từ xa nhưng lúc nào cũng có người ngồi. Thế là tôi vừa quan sát đều đặn như Tomiyasu Hayahisa, tôi vừa dần dần lại gần nó. Quả thật, nó được đủ các thể loại người khác nhau sử dụng với đủ các thể loại mục đích khác nhau. Có người ngủ và có người tập thể dục, có người hẹn hò và cũng có người ăn trưa một mình, lại có người này ngồi thiền và có người khác ngồi nhậu nữa... Cũng là một cái ghế đá như mọi cái ghế đá khác, nhưng tôi thấy nó đặc biệt và có lẽ họ cũng thế. <i>Là vì ba cái cây này rất đẹp sao? Hay do nó có một cái tầm ngắm đẹp hơn những cái ghế đá khác? Hay nó vô tình được đặt ở chỗ mà đứng từ đâu cũng dễ dàng thấy được?</i> Nhưng dù là bởi vì lí do gì đi nữa thì nó cũng đã đủ điều kiện để được coi là một địa điểm có tiềm năng trở thành một nơi chốn giữa đô thị này. <i>Eureka!</i>
        </p>
      </div>
    </section>
  );
}
