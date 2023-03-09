
# I Wanna Watch

A Website stream you can watch anime without ads


## API Reference

#### Search

```https
  GET https://api.iwannawatch.cf/garson.php?search=Any name
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search`  | `string` | **Required**. Put any name to search |

#### Get About Anime

```https
  GET https://api.iwannawatch.cf/garson.php?Name=naruto
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Name`      | `string` | **Required**. You need to put the name you got from search |

#### Get episodes

```https
  GET https://api.iwannawatch.cf/garson.php?Name='Naruto'&status=list
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Name`  | `string` | **Required**. Put Correct name and status=list |

#### add(name, list)

Takes two Parameters and returns the all episodes.

#### Get Link Video

```https
  GET https://api.iwannawatch.cf/garson.php?episode=32
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `episode`  | `number` | **Required**. Put the id for the episode to get video |


## Screenshots Example
**Search any name**
![App Screenshot](https://i.postimg.cc/D0yYzk6V/image.png)
**Do Name=put the name you got search**
![App Screenshot](https://i.postimg.cc/Qdr1gkLC/image.png)
**Result will be like that**
![App Screenshot](https://i.postimg.cc/wjH0VRnq/image.png)
**Add status=list to get all episodes**
![App Screenshot](https://i.postimg.cc/8PT6Xdk0/image.png)
**OK now you need send ID episode to get link video**
![App Screenshot](https://i.postimg.cc/qBwRRP01/image.png)
**And done here your links with different size**
![App Screenshot](https://i.postimg.cc/yY573BGy/image.png)




## Author

- [@OutakoO](https://github.com/OutakoO)


## FAQ

#### Any Question

- [@OutakoO](https://www.instagram.com/out_akoo/) Ask me in instagram

