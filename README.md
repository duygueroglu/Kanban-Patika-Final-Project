# Kanban :white_check_mark: :pencil: ![](https://img.shields.io/badge/version-1.0-orange) 
<p float="left">
  <img src="https://github.com/duygueroglu/Kanban-Patika-Final-Project/blob/main/images/kanban.png" width="458" />
  <img src="https://github.com/duygueroglu/Kanban-Patika-Final-Project/blob/main/images/register.png" width="488" /> 
</p>

Clone and Installation
=============
- First of all, clone project with Git bash, or use **Github Desktop>File>Clone Repository>URL** and paste here the URL of the repository.
```
  git clone https://github.com/duygueroglu/Kanban-Patika-Final-Project
```
- Then, for the backend, clone this ready-to-use repository.
```
git clone https://github.com/haandev/patika-kanban-api
```
- Open backend project with your editor and enter ```docker-compose up``` to terminal.

- If you see this message on your terminal, it worked successfully.
<p float="left">
  <img src="https://github.com/duygueroglu/Kanban-Patika-Final-Project/blob/main/images/starter.png" width="440" />
</p>

- At last, enter ``` npm start``` and start the project.

# Entities
- Board
- Card
- Checklist
- Checklist Item
- Comment
- Label
- List

# Attributes

### Board Attributes
- Add board
- Update board (change name)
- Delete board
- Share board with another user
- Delete user from board

### Card Attributes
- Add card
- Update card (title, description, due date)
- Add label to card
- Delete label from card

### Checklist & Checklist Item Attributes
- Add checklist to card
- Add checklist item to checklist
- Change boolean value of checklist items

### List Attributes
- Add list to board
- Change sequence of lists
- Change names of lists
- Delete list

# User Controllers
- Login
- Register
- Change Password
