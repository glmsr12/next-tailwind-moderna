const classes = {
  // common classes
  flex: {
    display: 'flex',
  },
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'initial',
  },
  sort: {
    marginRight: 1,
  },
  fullHeight: { height: '100v' },
  fullWidth: {
    witdh: '100%',
  },

  // Header

  appbar: {
    backgroundColor: '#6D9886',
    '& a': {
      color: '#ffffff',
      marginLeft: 7,
    },
  },

  toolbar: {
    justifyContent: 'space-between',
  },

  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },

  // Layout Section
  main: {
    marginTop: 2,
    minHeight: '80vh',
  },
  footer: {
    marginTop: 1,
    textAlign: 'center',
  },
  section: {
    marginTop: 1,
    marginBottom: 1,
  },

  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },

  //map section

  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    width: 250,
  },

  // review section

  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },

  // menu

  menuButton: { padding: 0 },
  mt1: { marginTop: '1rem' },

  // Search Bar

  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },
  searchInput: {
    paddingLeft: 1,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },

  searchButton: {
    backgroundColor: '#f8c040',
    paddingLeft: 5,
    paddingRight: 1,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },

  iconButton: {
    backgroundColor: '#f8c040',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
};
export default classes;
