export interface BlogTypes {
  attributes: {
    content: string;
    createdAt: string;
    description: string;
    locale: string;
    problematics: {};
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
  };
  id: number;
}

export interface CourseTypes {
  attributes: {
    content: string;
    createdAt: string;
    description: string;
    locale: string;
    problematics: {};
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
  };
  id: number;
}

export interface DataToolsCategoriesTypes {
  attributes: {
    data_tool_category: {};
    localizations: {};
    createdAt: string;
    description: string;
    locale: string;
    publishedAt: string;
    slug: string;
    title: string;
    url: string;
  };
  id: number;
}

export interface NewsTypes {
  attributes: {
    content: string;
    createdAt: string;
    date: string;
    description: string;
    locale: string;
    localizations: {};
    photo: {};
    publishedAt: string;
    title: string;
    updatedAt: string;
  };
  id: number;
}

export interface OutreachTypes {
  attributes: {
    author: string;
    city: string;
    conference: string;
    country: string;
    createdAt: string;
    description: string;
    locale: string;
    localizations: {};
    people: {
      data: [];
    };
    publishedAt: string;
    title: string;
    type: string;
    updatedAt: string;
    year: string;
    urlConference: string;
  };
  id: number;
}

export interface PageTypes {
  attributes: {
    slug: string;
    title: string;
    content: string;
    description: string;
  };
  id: number;
}

export interface PeopleTypes {
  attributes: {
    email: string;
    linkedIn: string;
    locale: string;
    name: number;
    photo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    projectDescription: string;
    publishedAt: string;
    researchInterests: ResearchInterestsTypes[];
    research_projects: {
      data: ResearchTypes[];
    };
    slug: string;
    twitter: string;
    type: string;
  };
  id: number;
}

export interface ProblematicTypes {
  attributes: {
    courses: {
      data: [];
    };
    content: string;
    author: string;
    locale: string;
    journal: string;
    semester: string;
    localizations: {};
    numberPages: number;
    people: {};
    research_projects: {};
    title: string;
    pdf: {
      data: [
        {
          attributes: {
            url: string;
          };
        }
      ];
    };
    url: string;
    volume: string;
    year: string;
    slug: string;
  };
  id: number;
}
export interface PublicationTypes {
  attributes: {
    abstract: string;
    author: string;
    journal: string;
    localizations: {};
    numberPages: number;
    people: {
      data: [];
    };
    research_projects: {};
    title: string;
    type: string;
    url: string;
    locale: string;
    volume: string;
    year: string;
    slug: string;
  };
  id: number;
}

export interface ResearchTypes {
  attributes: {
    slug: string;
    title: string;
    content: string;
    type: string;
    description: string;
    people_items: {
      data: [];
    };
    publication_items: {
      data: [];
    };
    isCompleted: boolean;
    locale: string;
  };
  id: number;
}

export type ResearchInterestsTypes = {
  id: number;
  tag: string;
};
export interface ResourceTypes {
  attributes: {
    createdAt: string;
    data_tool_category: {
      data: {
        attributes: {
          title: string;
          description: string;
        };
      };
    };
    description: string;
    generatedByOwnResearch: boolean;
    locale: string;
    localizations: {};
    publishedAt: string;
    title: string;
    type: string;
    updatedAt: string;
    url: string;
  };
  id: number;
  description: string;
}
