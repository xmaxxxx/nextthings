import React from 'react';
import Card from '../components/card';

const Project = () => {
  return (
    <div className="min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-white mb-12">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Card
          title="My Project 1"
          description="This is a description of my awesome project 1!"
          image="https://via.placeholder.com/300"
          link="https://yourprojectlink.com"
        />
        <Card
          title="My Project 2"
          description="This is a description of my awesome project 2!"
          image="https://via.placeholder.com/300"
          link="https://yourprojectlink.com"
        />
        <Card
          title="My Project 3"
          description="This is a description of my awesome project 3!"
          image="https://via.placeholder.com/300"
          link="https://yourprojectlink.com"
        />
        <Card
          title="My Project 4"
          description="This is a description of my awesome project 4!"
          image="https://via.placeholder.com/300"
          link="https://yourprojectlink.com"
        />
        <Card
          title="My Project 5"
          description="This is a description of my awesome project 5!"
          image="https://via.placeholder.com/300"
          link="https://yourprojectlink.com"
        />
      </div>
    </div>
  );
};

export default Project;
