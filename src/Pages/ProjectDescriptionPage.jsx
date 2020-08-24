import React from 'react';
import './ProjectDescriptionPage.css';

const ProjectDescriptionPage = () => (
  <div class='lightbox-wrapper' id='item-1'>
    <div class='f-basis-100'>
      <div class='lightbox-close' data-modal-close>
        <span class='close-btn'>
          <span class='btn-line'></span>
        </span>
      </div>
    </div>
    <div class='container'>
      <div class='row'>
        <div class='col-12 col-lg-5'>
          <div class='lightbox-gallery owl-carousel owl-theme'>
            <img class='img-fluid item-img' alt='Item' src='img/item-1.jpg' />
            <img class='img-fluid item-img' alt='Item' src='img/item-2.jpg' />
            <img class='img-fluid item-img' alt='Item' src='img/item-3.jpg' />
            <img class='img-fluid item-img' alt='Item' src='img/item-4.jpg' />
            <img class='img-fluid item-img' alt='Item' src='img/item-5.jpg' />
            <img class='img-fluid item-img' alt='Item' src='img/item-6.jpg' />
          </div>
        </div>
        <div class='col-12 col-lg-7'>
          <div class='lightbox-content'>
            <h3 class='content-title'>Label Tag Mockup</h3>
            <div class='content-description'>
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
            <ul class='list-inline content-info'>
              <li class='list-inline-item single-info'>
                <span>Client:</span>
                <p>Envato</p>
              </li>
              <li class='list-inline-item single-info'>
                <span>Categories:</span>
                <p>
                  <a href='#0'>Branding</a>, <a href='#0'>Web Design</a>
                </p>
              </li>
              <li class='list-inline-item single-info'>
                <span>Date:</span>
                <p>12 May, 2019</p>
              </li>
              <li class='list-inline-item single-info'>
                <span>Technologies:</span>
                <p>HTML5, SCSS, JS</p>
              </li>
            </ul>
            <a
              class='btn content-btn button-main button-scheme'
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
