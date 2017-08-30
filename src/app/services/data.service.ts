import { Injectable } from '@angular/core';
import { Scenario } from '../models/scenario';

@Injectable()
export class DataService {
  data: Scenario[];

  constructor() { }

  getData(): Scenario[] {
    if (!this.data) {
      this.setData();
    }
    return this.data;
  }

  setData() {
    this.data = [
      { // One
        problem: 'Two or more people in different places need to simultaneously and collaboratively',
        image: 'assets/images/BP2_2887.jpg',
        img_alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
        ideas: [
          {
            text: 'perform music',
            examples: [
              {
                name: 'LOLA',
                url: 'https://www.internet2.edu/vision-initiatives/initiatives/innovation-platform/'
              }
            ]
          },
          {
            text: 'exercise with coordinated movements',
            examples: [
              {
                name: 'FitNet',
                url: 'https://www.us-ignite.org/apps/fitnet/'
              }
            ]
          },
          {
            text: 'examine and manipulate 3D objects',
            examples: [
              {
                name: 'PlanIT Impact',
                url: 'https://www.us-ignite.org/apps/PlanIT-Impact/'
              }
            ]
          },
          {
            text: 'interactively view the similar sections of a big data set (or larger)',
            examples: []
          },
          {
            text: 'have a natural conversation or distributed meeting as if you were together',
            examples: [
              {
                name: 'UltraGrid',
                url: 'http://www.ultragrid.cz/'
              },
              {
                name: 'SightDeck',
                url: 'https://www.us-ignite.org/apps/cmh-sightdeck/'
              }
            ]
          },
          {
            text: 'teach and learn in a virtual environment',
            examples: []
          },
          {
            text: 'annotate 360 degree video',
            examples: [
              {
                name: 'PanoVR',
                url: 'https://www.us-ignite.org/apps/panovr/'
              }
            ]
          },
          {
            text: 'adjust city planning data interactively and visualize the results of their changes',
            examples: [
              {
                name: 'Austin Budget Party',
                url: ''
              }
            ]
          },
          {
            text: 'pair program manufacturing or educational robots and have them act in real-time',
            examples: [
              {
                name: 'Gigabots',
                url: 'https://www.us-ignite.org/apps/gigabots/'
              }
            ]
          }
        ]
      },
      { // two
        problem: 'Expand the capabilities of low-end devices by using off-site resources over high speed networks and edge-compute to connect',
        image: 'assets/images/IoTArray.jpg',
        img_alt_text: 'A controller manages an array of sensors',
        ideas: [
          {
            text: 'VR headsets for experiential education',
            examples: [
              {
                name: 'SolarVR',
                url: ''
              }
            ]
          },
          {
            text: 'domestic robots swarms',
            examples: []
          },
          {
            text: 'senior citizens to health and safety monitoring systems',
            examples: [
              {
                name: 'Elder-Care as a Service',
                url: ''
              }
            ]
          },
          {
            text: '3D modeling systems and fabrication labs',
            examples: [
              {
                name: 'Virtual Fab-Lab',
                url: ''
              }
            ]
          },
          {
            text: 'shoppers to recommendation engines provide feedback in real-time at point of purchase',
            examples: [
              {
                name: 'Electronic Double Up Foodbucks',
                url: ''
              }
            ]
          }
        ]
      },
      { // three
        problem: 'Use big-data from hubs, archives or field devices for better decision making or education by',
        image: 'assets/images/BP2_3761.jpg',
        img_alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
        ideas: [
          {
            text: 'merging and visualizing civic and engineering data to plan for increased energy efficiency',
            examples: [
              {
                name: 'PlanIT Impact',
                url: ''
              }
            ]
          },
          {
            text: 'visualizing meteorological data with real time pollution sensors',
            examples: [
              {
                name: 'LEaRN',
                url: ''
              },
              {
                name: 'Pollution Vizualizer',
                url: ''
              },
              {
                name: 'GASP',
                url: ''
              }
            ]
          },
          {
            text: 'modeling city data in a collaborative AR or VR environment',
            examples: []
          },
          {
            text: 'retraining machine learning algorithms training sets to form real-time recommendations',
            examples: []
          },
          {
            text: 'overlaying layers from multi-spectrum surveys for better land use or monitoring of infrastructure',
            examples: []
          },
          {
            text: 'detecting floods in real-time and advise area residents to seek safety or of unsafe travel routes',
            examples: []
          },
          {
            text: 'analyze drone footage to help find a missing person or monitor infrastructure',
            examples: []
          }
        ]
      },
      { // four
        problem: 'Provide unprecedented levels of detail through the use of streaming 4k Video to',
        image: 'assets/images/BP2_3741.jpg',
        img_alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
        ideas: [
          {
            text: 'provide high quality real-time microscopy to classrooms',
            examples: [
              {
                name: '4K Microscope',
                url: ''
              }
            ]
          },
          {
            text: 'provide real time control over telescopes for sky observations to classrooms',
            examples: []
          },
          {
            text: 'stream interactive 360 degree video for collaborative analysis',
            examples: []
          },
          {
            text: 'connect mental health professionals with patience remotely at high frame rate',
            examples: []
          },
          {
            text: 'teach lip-reading or body language analysis',
            examples: []
          }
        ]
      },
      { // five
        problem: 'Enable real-time interactive control of',
        image: 'assets/images/BP1_0943.jpg',
        img_alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
        ideas: [
          {
            text: 'robots that enable seamless interaction with the environment',
            examples: []
          },
          {
            text: 'manufacturing arrays to enable high percision professional crafting remotely',
            examples: []
          },
          {
            text: 'surgical robots so doctors can assist in critical procedures remotely',
            examples: []
          },
          {
            text: 'simulated environments to enable experiential education in high skill fields',
            examples: []
          },
          {
            text: 'implanted medical devices to tailor therapy to patients schedule and reduce the need for expensive travel to medical centers',
            examples: []
          }
        ]
      },
      { // six
        problem: 'Enable unprecedented levels of security or enable direct interaction by',
        image: 'assets/images/BP1_0723.jpg',
        img_alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
        ideas: [
          {
            text: 'perform music',
            examples: [
              {
                name: 'building a Software Defined Network that isolates IoT arrays from the public internet',
                url: ''
              },
              {
                name: 'provide direct connections between area compute clusters to build a distributed super-computer',
                url: ''
              },
              {
                name: 'isolating critical infrastructure like public safety networks or power grids to allow systems to only interact internally',
                url: ''
              },

            ]
          }
        ]
      }
    ];
  }
}
