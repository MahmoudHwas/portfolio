import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ProjectData } from "../ProjectData";

// تعريف Interface لكل عنصر في ProjectData
interface Project {
  id: number;
  name: string;
  image: string;
  livedemo?: string; // اختياري
  github?: string;   // اختياري
}

const Projects = () => {
  const [data, setData] = useState<Project[]>([]);
  const [collection, setCollection] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  useEffect(() => {
    setData(ProjectData);
    setCollection(Array.from(new Set(ProjectData.map((item: Project) => item.name))));
  }, []);

  const GalleryFilter = (itemData: string) => {
    if (itemData === 'All') {
      setData(ProjectData);
    } else {
      const filter = ProjectData.filter((item: Project) => item.name === itemData);
      setData(filter);
    }
    setActiveFilter(itemData);
  };

  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]' id='projects'>
      <h1 className='heading'>
        Pro <span className='text-yellow-300'>Jects</span>
      </h1>
      <div className="flex justify-center items-center w-[100%] h-32 text-white">
        <ul className='flex gap-3 justify-center items-center'>
          <li
            className={`border-[2px] border-[#55e6a5] p-2 cursor-pointer transition ease-in-out ${
              activeFilter === 'All' ? 'bg-[#55e6a5]' : 'hover:bg-[#55e6a5]'
            }`}
            onClick={() => GalleryFilter('All')}
          >
            All
          </li>
          {collection.map((item: string) => (
            <li
              key={item}
              onClick={() => GalleryFilter(item)}
              className={`border-[2px] border-[#55e6a5] p-2 cursor-pointer transition ease-in-out ${
                activeFilter === item ? 'bg-[#55e6a5]' : 'hover:bg-[#55e6a5]'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        className='w-[80%] relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] max-h-[960px] overflow-y-auto'
        style={{
          scrollbarWidth: 'thin', // لـ Firefox
          scrollbarColor: '#55e6a5 #02050a', // لون الـ Thumb والـ Track في Firefox
        }}
      >
        <style jsx>{`
          /* لـ Webkit (Chrome, Safari, Edge) */
          div::-webkit-scrollbar {
            width: 8px; /* عرض الـ Scrollbar */
           
          }
          div::-webkit-scrollbar-track {
            background: #02050a; /* لون الخلفية (Track) */
          }
          div::-webkit-scrollbar-thumb {
            background: #55e6a5; /* لون الـ Thumb (الجزء اللي بيتحرك) */
            border-radius: 4px; /* زوايا دائرية */
            
          }
          div::-webkit-scrollbar-thumb:hover {
            background: #44c28a; /* لون أغمق لما تحط الماوس عليه */
          }
        `}</style>
        {data.map((item: Project) => (
          <div key={item.id} className="flex flex-col items-center">
            {/* الصورة */}
            <div className='cursor-pointer pt-[0px] relative w-[100%] h-[200px] md:h-[300px]'>
              <a href={item.livedemo ? item.livedemo : item.github} target='_blank' rel="noopener noreferrer">
                <Image src={item.image} alt={item.name} layout='fill' className='object-contain' />
              </a>
            </div>
            {/* الزراير */}
            <div className="flex gap-4 mt-4">
              {item.livedemo && (
                <a
                  href={item.livedemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[2px] border-[#55e6a5] text-white px-4 py-2 rounded-md hover:bg-[#55e6a5] hover:text-black transition ease-in-out"
                >
                  Live Demo
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[2px] border-[#55e6a5] text-white px-4 py-2 rounded-md hover:bg-[#55e6a5] hover:text-black transition ease-in-out"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;