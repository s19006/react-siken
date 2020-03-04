import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  TextField,
  Avatar,
  ListItemIcon
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {
  ShowChart,
  WbSunny,
  CloudQueue,
  LabelImportant
} from '@material-ui/icons'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      item: {
        weather: '',
        temperature: '',
        icon: '',
        pressure: '',
        speed: ''
      },
      placeName: ''
    }
    this.apiToken = '60a35d514f8f55678203c4b633f16fb1'
  }

  async getData (id) {
    const getJSON = (uri, options) =>
      window
        .fetch(uri, options)
        .then(res => res.json())
        .then(json => ({
          weather: json.weather[0].description,
          icon: json.weather[0].icon,
          temperature: json.main.temp,
          pressure: json.main.pressure,
          speed: json.wind.speed
        }))

    const options = { method: 'get' }
    const uri =
      'https://api.openweathermap.org/data/2.5/weather?lang=ja&units=metric'
    const params = `&appid=${this.apiToken}&id=${id}`
    const data = await getJSON(uri + params, options)
    this.setState({ item: data })
  }

  handleUpdate (event) {
    const index = event.target.dataset.optionIndex
    const place = this.state.data[index]
    this.getData(place.id)
    this.setState({ placeName: place.name })
  }

  componentDidMount () {
    this.setState({
      data: [
        { name: '北海道 札幌市', id: 2128295 },
        { name: '東京 東京都', id: 1850147 },
        { name: '栃木 日光市', id: 1855395 },
        { name: '神奈川 鎌倉市', id: 1860672 },
        { name: '大阪 大阪府', id: 1853909 },
        { name: '京都 京都府', id: 1857910 },
        { name: '奈良 奈良市', id: 1855612 },
        { name: '愛知 名古屋市', id: 1856057 },
        { name: '兵庫県 姫路市', id: 1862627 },
        { name: '広島 広島市', id: 1862415 },
        { name: '福岡 福岡市', id: 1863967 },
        { name: '沖縄 那覇市', id: 1894616 },
        { name: 'ニューヨーク', id: 5128581 },
        { name: 'ロサンゼルス', id: 5368361 },
        { name: 'シアトル', id: 5809844 },
        { name: 'ロンドン', id: 2643741 },
        { name: 'ホノルル', id: 5856195 },
        { name: 'ストックホルム', id: 2673730 },
        { name: 'イスタンブール', id: 745042 },
        { name: 'ミラノ', id: 3173435 },
        { name: 'バルセロナ', id: 3128760 },
        { name: 'マドリード', id: 3117735 },
        { name: 'パリ', id: 2988507 },
        { name: 'ドバイ', id: 292223 },
        { name: 'マラケッシュ', id: 2542997 },
        { name: 'シドニー', id: 2147714 },
        { name: '香港', id: 1819729 },
        { name: '台北', id: 1668341 }

      ]
    })
  }

  render () {
    console.log(this.state)
    return (
      <Card>
        <div class='Card'>
          <CardHeader title='人気都市天気' />
        </div>
        <CardActions>
          <SelectorView
            data={this.state.data}
            handleUpdate={this.handleUpdate.bind(this)}
          />
        </CardActions>
        <CardContent>
          <ListView item={this.state.item} />
        </CardContent>
      </Card>
    )
  }
}

const SelectorView = props => (
  <Autocomplete
    options={props.data}
    getOptionLabel={option => option.name}
    renderInput={params => (
      <TextField
        {...params}
        label='地域を選んでね'
        variant='outlined'
        style={{ width: 300 }}
        fullWidth
      />
    )}
    onChange={props.handleUpdate}
  />
)

const ListView = props => {
  const { weather, icon, temperature, pressure, speed } = props.item
  const formatTemperature = temperature ? `気温 ${temperature}℃` : ''
  const formatPressure = pressure ? `気圧 ${pressure}hap` : ''
  const formatSpeed = speed ? `風速 ${speed}m/s` : ''
  const path = `http://openweathermap.org/img/wn/${icon}.png`
  const image = icon ? <Avatar src={path} alt={weather} /> : <WbSunny />
  console.log('props', props)
  return (
    <List>
      <ListItem>
        <ListItemIcon>{image}</ListItemIcon>
        <ListItemText primary={weather} />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <ShowChart />
        </ListItemIcon>
        <ListItemText primary={formatTemperature} />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <CloudQueue />
        </ListItemIcon>
        <ListItemText primary={formatPressure} />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <LabelImportant />
        </ListItemIcon>
        <ListItemText primary={formatSpeed} />
      </ListItem>
    </List>
  )
}

export default App
