'use client'
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { ProgressBar } from 'primereact/progressbar';
import "./Carrusel.css";
import { CarruselItem } from '@/app/interfaces/interfaces';
import "primereact/resources/themes/saga-blue/theme.css"; 
import banner from "../../../../public/banner.png"


function ControlledCarousel() {
  const [carruselItems, setCarruselItems] = useState<CarruselItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCarruselItems = async () => {
      
      try {
        const response = await fetch('/api/Publicaciones/carrusel');
        if (!response.ok) {
          throw new Error('Error al obtener los datos del carrusel');
        }
        const data = await response.json();
        if (Array.isArray(data.carrusel)) {
          setCarruselItems(data.carrusel);
        } else {
          console.error('La propiedad "carrusel" no es un array:', data.carrusel);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos del carrusel:', error);
        setLoading(false);
      }
    };

    fetchCarruselItems();
  }, []);

  if (loading) {
    return (
      <div className="card">
      <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
  </div>
    );
  }

  return (
    <Carousel data-bs-theme="dark">
      {carruselItems.map((item, index) => (
        <Carousel.Item key={index} interval={10000}>
          {/* <Image 
            src={item.urlImagen} 
            alt={item.tituloprincipal} 
            width={1500} 
            height={100} 
          /> */}
           <Image 
            src={banner} 
            alt="" 
            width={1940} 
            height={341} 
          />
         
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;

