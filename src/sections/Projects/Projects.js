import React, { useState } from 'react'
import ProjectData from '../../data/ProjectData';
import MenuItem from '../../components/MenuItem/MenuItem'
import FilterButton from '../../components/FilterButton/FilteredButton';

import "./Projects.css";
import Title from '../../components/Title/TitlePage';
import ModelSection from '../../components/ModelSection/ModelSection';
import Container from '../../components/Container/Container';

const allButtons = ['ALL', ...new Set(ProjectData.map(item => item.category))];

const Projects = () => {

  const [menuItem, setMenuItems] = useState(ProjectData);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "ALL") {
      setMenuItems(ProjectData);
      return;
    }

    const filteredData = ProjectData.filter(item => item.category === button);
    setMenuItems(filteredData);
  }
  return (
    <ModelSection id='project'>
      <Container customClass='column-padding'>
        <div data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
          <Title name='Projects' />
        </div>
          <FilterButton filter={filter} button={button} />
        <MenuItem menuItem={menuItem} />
      </Container>
    </ModelSection>
  )
}

export default Projects;