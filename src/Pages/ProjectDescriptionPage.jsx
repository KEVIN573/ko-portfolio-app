import React from 'react';
import './ProjectDescriptionPage.css';

const ProjectDescriptionPage = () => (
  <div className='lightbox-wrapper' id='item-1'>
    <div className='f-basis-100'>
      <div className='lightbox-close'>
        <span className='close-btn'>
          <span className='btn-line'></span>
        </span>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-5'>
          <div className='lightbox-gallery owl-carousel owl-theme'>
            <img
              className='img-fluid item-img'
              alt='Item'
              src='img/item-1.jpg'
            />
            <img
              className='img-fluid item-img'
              alt='Item'
              src='img/item-2.jpg'
            />
            <img
              className='img-fluid item-img'
              alt='Item'
              src='img/item-3.jpg'
            />
            <img
              className='img-fluid item-img'
              alt='Item'
              src='img/item-4.jpg'
            />
            <img
              className='img-fluid item-img'
              alt='Item'
              src='img/item-5.jpg'
            />
            <img
              className='img-fluid item-img'
              alt='Item'
              src='img/item-6.jpg'
            />
          </div>
        </div>
        <div className='col-12 col-lg-7'>
          <div className='lightbox-content'>
            <h3 className='content-title'>Label Tag Mockup</h3>
            <div className='content-description'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda aut sapiente quo explicabo, quasi incidunt aperiam
                laudantium, nemo cum eaque inventore ut voluptas voluptatibus
                nihil! Amet soluta, ea illo sint?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati dignissimos culpa deserunt aspernatur ipsa veritatis
                alias labore tempore laboriosam commodi! Ab neque sunt, odio
                voluptatibus, dignissimos nisi consequuntur atque qui explicabo
                eligendi, harum in? Amet aspernatur atque quam. Illo natus
                tempora explicabo deleniti molestias numquam debitis
                repudiandae, repellendus voluptatum soluta?
              </p>
            </div>
            <ul className='list-inline content-info'>
              <li className='list-inline-item single-info'>
                <span>Client:</span>
                <p>Envato</p>
              </li>
              <li className='list-inline-item single-info'>
                <span>Categories:</span>
                <p>
                  <a href='#0'>Branding</a>, <a href='#0'>Web Design</a>
                </p>
              </li>
              <li className='list-inline-item single-info'>
                <span>Date:</span>
                <p>12 May, 2019</p>
              </li>
              <li className='list-inline-item single-info'>
                <span>Technologies:</span>
                <p>HTML5, SCSS, JS</p>
              </li>
            </ul>
            <a
              className='btn content-btn button-main button-scheme'
              href='#0'
              role='button'
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectDescriptionPage;
