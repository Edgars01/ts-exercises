# Video Store

The goal of this optional exercise is to design and implement a simple inventory control system for a small video rental store. Define least two classes: a class Video to model a video and a class VideoStore to model the actual store.

Assume that a Video may have the following state:

- a title;
- a flag to say whether it is checked out or not;
- an average user rating.

In addition, Video has the following behaviour:

- being checked out;
- being returned;
- receiving a rating.

The VideoStore may have the state of videos in there currently. The VideoStore will have the following behaviour:

- add a new video (by title) to the inventory;
- check out a video (by title);
- return a video to the store;
- take a user's rating for a video;
- list the whole inventory of videos in the store.

Finally, test the functionality of your two classes. It should allow the following.

- Add 3 videos: "The Matrix", "Godfather II", "Star Wars Episode IV: A New Hope".
- Give several ratings to each video.
- Rent each video out once and return it.
- List the inventory after "Godfather II" has been rented out out.

Summary of design specs:

- Store a library of videos identified by title.
- Allow a video to indicate whether it is currently rented out.
- Allow users to rate a video and display the percentage of users that liked the video.
- Print the store's inventory, listing for each video:
  - its title,
  - the average rating,
  - and whether it is checked out or on the shelves.
