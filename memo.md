- material ui
- react router
  route path はそのパスで表示する
  link to は a タグ生成
- css  
   text-decoration: inherit;
  min-width: 13vw;
  flex-direcition: column;の中の img タグはセンターに寄せられる h1 などは左端
  input:focus{
  outline-width: 0;
  }
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background-image: -weblit-linear-gradient(top, #f8f8f8, #f1f1f1);
  Button varient='outlined'
  align-items: flex-start;
  width: unset;

- hook
  const [input, setInput] = useState("");
  onChange={(e) => setInput(e.target.value)}
  react router dom

  - history

- <StateProvider initialState={initialState}  reducer={reducer} /> //説明 1.40 分 index.js
  childern is refering to <App /> in the index.js

initial state is what that data layer looks like when the app is loaded

the reducer is something which is clever and it listens to changes for that will be needed from there that

export const use StateValue = () => useContext(StateContext)
is hook which allows us to pull informmation from the data layer

redux plan ? the react context api ?

- reducer and initialState live in a file called reducer.js

- StateProvider 全体

- reducer.js
  export const initialState = {
  term: null,
  }
  what is Elon musk

  whenever we want to change the data layer
  we need todispatch an action
  export const actionTypes = {
  SET_SERCH_TERM: "SET_SEARCH_TERM"
  }

  what is switch in reducer

  the state is state of data layer

action in reducer is whatever we're dispatching into the data layer so into the context

...state is called spread operator

1.47 分

const [{ term }, dispatch] = useStateValue(); in SearchPage.js

- useGoogleSearch.js
  custom json api
  programmerble search

this hook is going to have its own piece of state called data
// const [data, setData] = useState(null);
and this hook whenever use it has useEffect right so whenever we use this hook it's gonna fire off a use effect

2.33

response が全部 term になっている

2.47

- searchPage result
  {true && (
    <div className="searchPage__results">
    <p className="searchPage__resultCount">
    About 30000 results (0.3 seconds) for Tesla
    </p>
    </div>
    )}

  About {data?.searchInformation.formattedTotalResults} results

  {data?.items.map((item) => (
  <div className="searchPage__result">
  <a href={item.link}>{item.displayLink}</a>
  <a className="serchPage__resultTitle" href={item.link}>
  <h2>{item.title}</h2>
  </a>
  <p className="serchPage__resultSnippet">{item.snippet}</p>
  </div>
  ))}

  2.57 each results items map inroduction

  3.00 snippet

<a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="serchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
</a>

- mock api

  3.09
