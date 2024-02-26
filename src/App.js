
import React from 'react';
function App() {
  return (
    <>
    <nav className='w-full h-[64px]  bg-[#212731] flex justify-center items-center gap-11 '>
     <div className=' nav-div w-[258px] h-[37px] rounded-lg bg-white border flex '>
     <img src='IMAGE.png' className=' my-2 mx-1' />
     <input type='text' className='inp w-[230px]  h-[35px] outline-0 outline-offset-0  rounded-lg' />
     </div>
     <p className='  text-[#D1D6DA] text-sm '>
      Categories
     </p>
     <p className=' nav-p text-[#D1D6DA] text-sm'>
    Website Builders
     </p>
     <p className=' nav-p text-[#D1D6DA] text-sm'>
    Today's Deals
     </p>
    </nav>

    <div className='w-full px-3 pt-3 flex justify-center items-center '>
     <div className='w-[1024px] main-container'>
      <div>
        <h2 className='text-5xl first-heading'>Best Website builders in the US</h2>
        <div className='w-full h-[1.33px] bg-[#E1E4E6] my-3'></div>
        <div className=' sec-nav w-full flex justify-between'>
          <div className='text-sm w-4/5 flex gap-1'>
            <img src='ti.png' className='pr-2'/>
            <p className=''>Last Updated - February 22, 2020</p>
            <img src='Iicon.png' className='pl-5 pr-2' />
            <p>Advertising Disclosure</p>
          </div>
          <div className='flex'>
            <p>Top Relevant</p>
            <img src='down.png' />
          </div>
        </div>
        <div className='w-full h-[1.33px] bg-[#E1E4E6] my-3'></div>
      </div>
      <div className=' third-nav flex w-fit pl-3 gap-20  text-xs my-7 text-[#4B5665]'>
        <p>Tools</p>
        <p>AWS Builder</p>
        <p>Start Build</p>
        <p>Build Supplies</p>
        <p>Tooling</p>
        <p>BlueHosting</p>
      </div>
      
      <div className='flex w-fit gap-20  text-sm my-7 text-[#4B5665] small-nav'>
      <p className='space'> Home {`>`} <span style={{wordSpacing:"0px"}}>Hosting for all</span> {`>`} Hosting {`>`} Hosting6 {`>`} Hosting5 </p>
      </div>
      <div className='tag bg-[#FF7724] w-[136px] h-[34px] border-r rounded-r-lg flex py-1 justify-evenly text-white mt-11'>
        <img src='cup.png' /><span>Best Choice</span></div>
      <div className='w-full flex justify-evenly h-[255px] items-center main-box'>
        <div className='flex flex-col  h-full justify-around'>
        <span className='rounded-full w-[44px] h-[44px] flex justify-center items-center  text-xl relative right-10'>1</span>
          <div className='mb-11'><img src='main.png' className='main-img mb-3' />
        <p className='text-sm caption-text text-[#626E79] text-center'>Builder 1</p></div>
        </div>
        <div className='w-[483px] h-full flex flex-col gap-3'>
          <p className='text-[#4B5665]'>
          <span className='text-base h1 font-bold'>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <h3 className='text-base h1 font-bold'>Main Highlights</h3>
          <p className='pl-5 text-[#4B5665]'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
          <p className='text-[#1B88F4] flex w-fit '>Show more v</p>
        </div>
        <div className='h-full flex flex-col justify-between -mt-14 items-center review-box'>
          <div className='bg-[#F3F9FF] w-[135px] h-[118px] flex flex-col items-center justify-around border-b rounded-b-xl'>
            <h1 className='text-3xl'>9.8</h1>
            <span>Exceptional</span>
            <img src='star.png' width={66} />
          </div>
          <button className='rounded-xl bg-[#1B88F4] text-white w-[232px] h-[48px] text-center p-auto'>View</button>
        </div>
        
      </div>

      <div className=' tag bg-[#FF7724] w-[136px] h-[34px] border-r rounded-r-lg flex py-1 justify-evenly text-white mt-11'><img src='diamond.png' /><span>Best Choice</span></div>
      <div className='w-full flex justify-evenly h-[255px] items-center main-box '>
      <div className='flex flex-col  h-full justify-around'>
        <span className='rounded-full w-[44px] h-[44px] text-xl flex justify-center items-center border border-[#E1E4E6] text-center relative right-10'>2</span>
          <div className='mb-11'><img src='main.png' className='mb-3 main-img' />
        <p className='text-sm text-[#626E79] text-center caption-text'>Builder</p></div>
        </div>
        <div className='w-[483px] h-full flex flex-col gap-3'>
          <p className='text-[#4B5665]'>
          <span className='h1 text-base font-bold'>SiteCraft 68-Inch Ultimate Web Design Studio-</span> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
          </p>
          <h3 className='text-base font-bold h1'>Main Highlights</h3>
          <p className='pl-5 text-[#4B5665]'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
          <p className='text-[#1B88F4] flex w-fit '>Show more v</p>
        </div>
        <div className='h-full flex flex-col justify-between -mt-14 items-center review-box'>
          <div className='bg-[#F3F9FF] w-[135px] h-[118px] flex flex-col items-center justify-around border-b rounded-b-xl'>
            <h1 className='text-3xl'>9.5</h1>
            <span>Excellent</span>
            <img src='star2.png' width={66} />
          </div>
          <button className='rounded-xl bg-[#1B88F4] text-white w-[232px] h-[48px] text-center p-auto'>View</button>
        </div>
      </div>

      <div className=' tag bg-[#FF7724] w-[136px] h-[34px] border-r rounded-r-lg flex py-1 justify-evenly text-white mt-11'><img src='diamond.png' /><span>Best Choice</span></div>
      <div className='w-full flex justify-evenly h-[255px] items-center main-box '>
      <div className='flex flex-col  h-full justify-around'>
        <span className='rounded-full w-[44px] h-[44px] flex justify-center items-center text-xl border border-[#E1E4E6] text-center relative right-10'>3</span>
          <div className='mb-11'><img src='main.png' className='mb-3 main-img' />
        <p className='text-sm text-[#626E79] text-center caption-text'>Builder 1</p></div>
        </div>
        <div className='w-[483px] h-full flex flex-col gap-3'>
          <p className='text-[#4B5665]'>
          <span className='text-base font-bold h1'>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <h3 className='text-base font-bold h1'>Main Highlights</h3>
          <p className='pl-5 text-[#4B5665]'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
          <p className='text-[#1B88F4] flex w-fit '>Show more</p>
        </div>
        <div className='h-full flex flex-col justify-between -mt-14 items-center review-box'>
          <div className='bg-[#F3F9FF] w-[135px] h-[118px] flex flex-col items-center justify-around border-b rounded-b-xl'>
            <h1 className='text-3xl'>9.3</h1>
            <span>Exceptional</span>
            <img src='star.png' width={66} />
          </div>
          <button className='rounded-xl bg-[#1B88F4] text-white w-[232px] h-[48px] text-center p-auto'>View</button>
        </div>
      </div>

      <div className='tag bg-[#FF7724] w-[136px] h-[34px] border-r rounded-r-lg flex py-1 justify-evenly text-white mt-11'><img src='diamond.png' /><span>Best Choice</span></div>
      <div className='w-full flex justify-evenly h-[420px] items-center main-box '>
      <div className='flex flex-col  h-full mt-7 gap-16'>
        <span className='rounded-full w-[44px] h-[44px] flex justify-center text-xl items-center border border-[#E1E4E6] text-center relative right-10'>4</span>
          <div className='mb-11'><img src='main.png' className='mb-3 main-img' />
        <p className='text-sm text-[#626E79] text-center mt-16 caption-text'>CDK</p></div>
        </div>
        <div className='w-[483px] h-full flex flex-col gap-3'>
          <p className='text-[#4B5665]'>
          <span className='text-base font-bold h1'>CDK Resposive Builder:</span> An extensive library of widgets and apps, and detailed step-by-step guides
          </p>
          <p className='text-[#074786] w-fit rounded-[4px] font-semibold text-[13px] p-2 bg-[#F2F4F7]'>26% Off</p>
          <h3 className='text-base font-bold h1'>Main Highlights</h3>
          <p className='ml-5 text-[#4B5665] bg-[#FFF4ED] text-[15px] rounded-xl p-3 '>
            <p><span className='bg-[#FFFFFF] rounded-[4px] text-base text-[#1B88F4] p-1 mr-2'>9.9</span>Building Response</p>
            <p className='my-4'><span className='bg-[#FFFFFF] rounded-[4px] text-base text-[#1B88F4] p-1 mr-2'>8.9</span>Cool</p>
            <p><span className='bg-[#FFFFFF] rounded-[4px] text-base text-[#1B88F4] p-1 mr-2'>8.9</span>Docs</p>
          </p>
          <div>
          <h3 className='text-base'>Why we love it</h3>
          <p className='text-[15px] text-[#4B5665]'><span className='bg-[#EBF5FF] rounded-full text-[#0855A1] w-[21.75px] h-[21.75px] text-sm px-1  mr-2'>🗸</span>Documentation</p>
          <p className='text-[15px] text-[#4B5665]'><span className='bg-[#EBF5FF] rounded-full text-[#0855A1] w-[21.75px] h-[21.75px] text-sm px-1 mr-2'>🗸</span>Easy Use</p>
          <p className='text-[15px] text-[#4B5665]'><span className='bg-[#EBF5FF] rounded-full text-[#0855A1] w-[21.75px] h-[21.75px] text-sm px-1 mr-2'>🗸</span>Out Of Box</p>
          </div>
          <p className='text-[#1B88F4] flex w-fit  '>Show more</p>
        </div>
        <div className='h-full flex flex-col justify-between -mt-14 items-center review-box'>
          <div className='bg-[#F3F9FF] w-[135px] h-[118px] flex flex-col items-center justify-around border-b rounded-b-xl'>
            <h1 className='text-3xl'>9.1</h1>
            <span>Very Good</span>
            <img src='star3.png' width={66} />
          </div>
          <button className='rounded-xl bg-[#1B88F4] text-white w-[232px] h-[48px] text-center p-auto'>View</button>
        </div>
      </div>
      <h1 className='text-[32px] text-[#2C384A] mt-11'>Related deals you might like for</h1>
      <div className=' sec-main w-full flex justify-between'> 
      <div className='w-[333px] h-[425px] flex flex-col items-center justify-evenly'>
     <img src='main.png' />
     <div className='w-11/12'><p className='w-full text-start'><span className='bg-[#F2F4F7] text-sm p-1 text-[#074786]'>20% Off</span> <span className='bg-[#F2F4F7] ml-1 text-sm text-[#074786] p-1'>Limited time</span></p>
      <h2 className='font-bold w-full text-center my-2'>Webbuilder 1</h2>
      <p className='w-10/12 mb-2'>Computer  Modern clasic with wix support</p>
      <p className='flex gap-1' ><span className='text-xl text-[#5C6874]'>$39.96</span><p className='pt-2'><span className='text-[#9FA9B3] text-sm mx-1 '>$49.96</span> <span className=' text-[13px] text-red-500 '>(20% Off)</span></p></p>
      </div><button className='bg-[#1B88F4] w-10/12 text-white p-2 text-center  rounded-lg'>View Deal</button>
      </div>

      <div className='w-[333px] h-[425px] flex flex-col items-center justify-evenly'>
     <img src='main.png' />
     <div className='w-11/12'><p className='w-full text-start'><span className='bg-[#F2F4F7] text-sm p-1 text-[#074786]'>20% Off</span> <span className='bg-[#F2F4F7] ml-1 text-sm text-[#074786] p-1'>Limited time</span></p>
      <h2 className='font-bold w-full text-center my-2'>Webbuilder 1</h2>
      <p className='w-10/12 mb-2'>Computer  Modern clasic with wix support</p>
      <p className='flex gap-1'><span className='text-xl text-[#5C6874]'>$39.96</span><p className='pt-2'><span className='text-[#9FA9B3] text-sm mx-1 '>$49.96</span> <span className=' text-[13px] text-red-500 '>(20% Off)</span></p></p>
      </div><button className='bg-[#1B88F4] w-10/12 text-white p-2 text-center  rounded-lg'>View Deal</button>
      </div>

      <div className='w-[333px] h-[425px] flex flex-col items-center justify-evenly'>
     <img src='main.png' />
     <div className='w-11/12'><p className='w-full text-start'><span className='bg-[#F2F4F7] text-sm p-1 text-[#074786]'>20% Off</span> <span className='bg-[#F2F4F7] ml-1 text-sm text-[#074786] p-1'>Limited time</span></p>
      <h2 className='font-bold w-full text-center my-2'>Webbuilder 1</h2>
      <p className='w-10/12 mb-2'>Computer  Modern clasic with wix support</p>
      <p className='flex gap-1'><span className='text-xl text-[#5C6874]'>$39.96</span><p className='pt-2'><span className='text-[#9FA9B3] text-sm mx-1'>$49.96</span> <span className=' text-[13px] text-red-500 '>(20% Off)</span></p></p>
      </div><button className='bg-[#1B88F4] w-10/12 text-white p-2 text-center  rounded-lg'>View Deal</button>
      </div>
      </div>
      <div className='w-full flex justify-between my-11 pre-footer'>
     <p className='text-[#5C6874] text-3xl w-5/12'>Sign up and get exclusive special deals</p>
     <div>
      <input className='w-8/12 h-[45px] outline-none outline-offset-0' type='text'/>
     <button className='bg-[#1B88F4] px-2 rounded-r-md text-white h-[45px]'>Sign Up</button></div>
     </div>
    </div>   
    </div>
  
    <footer className='w-full flex justify-center bg-[#212731] h-[452px]'>
      <div className='w-[1024px] flex gap-48 text-white mt-16 after-footer'>
        <p>CATEGORIES 
          <ul className='text-[#B6BDC4]'>
            <li className='my-3 text-sm'>
              Web Builder
            </li>
            <li className='my-3 text-sm'>
              Hosting
            </li>

            <li className='my-3 text-sm'>
              Data Center
            </li>

            <li className='my-3 text-sm'>
              Robotic-Automation
            </li>
          </ul>
        </p>

        <p>CONTACT
          <ul className='text-[#B6BDC4]'>
            <li className='my-3 text-sm'>
              Contact
            </li>
            <li className='my-3 text-sm'>
              Privacy Policy
            </li>

            <li className='my-3 text-sm'>
             Terms Of Service
            </li>

            <li className='my-3 text-sm'>
              Categories
            </li>

            <li className='my-3 text-sm  '>
              About
            </li>
          </ul>
        </p>
       <p className='mt-16 flex gap-2 text-[#B6BDC4] text-sm '> United States <span className='text-white ml-1 '>v</span></p>
      </div>
    </footer>

    </>
  );
}

export default App;
