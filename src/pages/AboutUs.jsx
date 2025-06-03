import Certification from "../component/Certification";
import Placement from "../component/Placement";
import Navbar from "../component/Navbar";

function AboutUs() {
  return (
    <div> 
        <Navbar/>
          <div class="border-b-2 border-gray-300 pt-5"></div>
          <div class="h-full text-center">
            <div class="flex flex-col justify-center items-center my-8 py-8">
    <h1 class="text-6xl my-4 py-8">Welcome to Internsala</h1>
    <p class="w-[600px]">We are a technology company on a mission to equip students with relevant skills & practical exposure to help them get the best possible start to their careers. Imagine a world full of freedom and possibilities. A world where you can discover your passion and turn it into your career. A world where you graduate fully assured, confident, and prepared to stake a claim on your place in the world.</p>
   </div> <div class="flex justify-center gap-6 my-8 py-8">
        <img class="w-[26%] h-[278px]" src="https://internshala.com/static/images/tgs/homepage_trending/pgc/DIGITAL_MARKETING_course_v4.png" alt="" srcset="" /> 
        <img class="w-[26%] h-[278px]" src="https://internshala-uploads.internshala.com/banner-images/home_new/stt_col999_may25-student.png.webp" alt="" srcset="" />
        <img class="w-[26%] h-[278px]" src="https://internshala-uploads.internshala.com/banner-images/home_new/pep_sales_star_2025-student.png.webp" alt="" srcset="" />
        </div>
    </div>
    </div>
  );
}

export default AboutUs;
