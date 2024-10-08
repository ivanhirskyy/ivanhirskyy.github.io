export const useFiles = () => {
  const files = useState('files', () => [
    {
      name: 'about',
      link: '/',
    },
    {
      name: 'projects',
      link: '/projects',
    },
    {
      name: 'contacts',
      link: '/contacts',
    },
  ]);

  const getFileContent = async (path: string) => {
    const file = files.value.find((f) => path === f.link);

    if (file) {
      const module = await loadContent(file.name);

      if (!module) return null;

      return module.default || module;
    }

    return null;
  };

  const loadContent = async (fileName: string) => {
    switch (fileName) {
      case 'about':
        return import('@/content/about');
      case 'projects':
        return import('@/content/projects');
      case 'contacts':
        return import('@/content/contacts');
      default:
        return import('@/content/about');
    }
  };

  return {
    files,
    getFileContent,
  };
};
