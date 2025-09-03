import { useState } from 'react'
import { cn } from '@/lib/utils'
import Icon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ForumPost {
  id: string
  title: string
  author: string
  avatar: string
  replies: number
  views: number
  lastActivity: string
  isSticky?: boolean
  tags?: string[]
}

interface NewsItem {
  id: string
  title: string
  content: string
  author: string
  date: string
  category: string
}

interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  joinDate: string
  posts: number
}

const mockPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Добро пожаловать на наш форум!',
    author: 'Админ',
    avatar: '',
    replies: 15,
    views: 234,
    lastActivity: '2 часа назад',
    isSticky: true,
    tags: ['важное', 'приветствие']
  },
  {
    id: '2', 
    title: 'Обсуждаем новые возможности платформы',
    author: 'Модератор',
    avatar: '',
    replies: 8,
    views: 156,
    lastActivity: '1 час назад',
    tags: ['обсуждение', 'новости']
  },
  {
    id: '3',
    title: 'Вопросы по использованию сервиса',
    author: 'Пользователь123',
    avatar: '',
    replies: 3,
    views: 89,
    lastActivity: '30 минут назад',
    tags: ['помощь', 'вопросы']
  }
]

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Запуск нового раздела форума',
    content: 'Мы рады объявить о запуске нового раздела для технических обсуждений.',
    author: 'Команда разработки',
    date: '2024-03-15',
    category: 'Объявления'
  },
  {
    id: '2',
    title: 'Обновление системы уведомлений',
    content: 'Теперь вы будете получать уведомления о новых ответах на ваши сообщения.',
    author: 'Техническая поддержка',
    date: '2024-03-14',
    category: 'Обновления'
  }
]

const mockTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Алексей Иванов',
    role: 'Администратор',
    avatar: '',
    joinDate: '2023-01-15',
    posts: 342
  },
  {
    id: '2',
    name: 'Мария Петрова',
    role: 'Модератор',
    avatar: '',
    joinDate: '2023-03-20',
    posts: 128
  },
  {
    id: '3',
    name: 'Дмитрий Сидоров',
    role: 'Разработчик',
    avatar: '',
    joinDate: '2023-02-10',
    posts: 95
  }
]

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [notifications, setNotifications] = useState([
    'Новый ответ в теме "Обсуждаем платформу"',
    'Упомянули вас в сообщении'
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-forum-light to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-forum-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-forum-orange to-forum-turquoise rounded-lg flex items-center justify-center">
                  <Icon name="MessageSquare" size={20} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-forum-orange to-forum-turquoise bg-clip-text text-transparent">
                  Форум
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button variant="ghost" size="sm" className="relative">
                  <Icon name="Bell" size={20} />
                  {notifications.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 px-1 min-w-[20px] h-5 text-xs bg-forum-orange hover:bg-forum-orange">
                      {notifications.length}
                    </Badge>
                  )}
                </Button>
              </div>
              
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-forum-turquoise text-white">П</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'discussions', label: 'Общение', icon: 'MessageCircle' },
              { id: 'news', label: 'Новости', icon: 'Newspaper' },
              { id: 'team', label: 'Состав', icon: 'Users' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "flex items-center space-x-2 px-3 py-4 text-sm font-medium border-b-2 transition-colors",
                  activeSection === item.id
                    ? "border-forum-orange text-forum-orange"
                    : "border-transparent text-gray-600 hover:text-forum-orange hover:border-gray-300"
                )}
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-forum-blue mb-4">
                Добро пожаловать на форум!
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Место для общения, обмена идеями и получения помощи
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-forum-orange">
                <div className="flex items-center mb-4">
                  <Icon name="MessageSquare" className="text-forum-orange mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-forum-blue">Активные обсуждения</h3>
                </div>
                <p className="text-gray-600 mb-4">Присоединяйтесь к горячим дискуссиям</p>
                <div className="text-2xl font-bold text-forum-orange">{mockPosts.length}</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-forum-turquoise">
                <div className="flex items-center mb-4">
                  <Icon name="Users" className="text-forum-turquoise mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-forum-blue">Участники</h3>
                </div>
                <p className="text-gray-600 mb-4">Активное сообщество экспертов</p>
                <div className="text-2xl font-bold text-forum-turquoise">{mockTeam.length}</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <Icon name="Newspaper" className="text-purple-500 mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-forum-blue">Новости</h3>
                </div>
                <p className="text-gray-600 mb-4">Последние обновления и объявления</p>
                <div className="text-2xl font-bold text-purple-500">{mockNews.length}</div>
              </div>
            </div>
          </div>
        )}

        {/* Discussions Section */}
        {activeSection === 'discussions' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-forum-blue">Обсуждения</h2>
              <Button className="bg-forum-orange hover:bg-forum-orange/90">
                <Icon name="Plus" size={16} className="mr-2" />
                Новая тема
              </Button>
            </div>

            <div className="space-y-4">
              {mockPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {post.isSticky && (
                          <Badge className="bg-forum-orange hover:bg-forum-orange">
                            <Icon name="Pin" size={12} className="mr-1" />
                            Закреплено
                          </Badge>
                        )}
                        {post.tags?.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-forum-turquoise/20 text-forum-blue">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-forum-blue hover:text-forum-orange cursor-pointer mb-2">
                        {post.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-gray-600 space-x-4">
                        <div className="flex items-center space-x-1">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs bg-forum-turquoise text-white">
                              {post.author[0]}
                            </AvatarFallback>
                          </Avatar>
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageSquare" size={14} />
                          <span>{post.replies} ответов</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={14} />
                          <span>{post.views} просмотров</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{post.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* News Section */}
        {activeSection === 'news' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-forum-blue">Новости и объявления</h2>
            </div>

            <div className="space-y-6">
              {mockNews.map((news) => (
                <article key={news.id} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-forum-turquoise hover:bg-forum-turquoise">
                      {news.category}
                    </Badge>
                    <time className="text-sm text-gray-500">{news.date}</time>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-forum-blue mb-4">{news.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{news.content}</p>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="User" size={14} className="mr-2" />
                    <span>Автор: {news.author}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeSection === 'team' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-forum-blue">Состав форума</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTeam.map((member) => (
                <div key={member.id} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarFallback className="text-xl bg-forum-turquoise text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-semibold text-forum-blue mb-2">{member.name}</h3>
                  <Badge className="bg-forum-orange hover:bg-forum-orange mb-4">
                    {member.role}
                  </Badge>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>С {member.joinDate}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Icon name="MessageSquare" size={14} />
                      <span>{member.posts} сообщений</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Notifications Panel */}
      {notifications.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border-l-4 border-forum-orange p-4 max-w-sm">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-forum-blue">Уведомления</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setNotifications([])}
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
          <div className="space-y-2">
            {notifications.map((notification, index) => (
              <div key={index} className="text-sm text-gray-600 p-2 bg-forum-light rounded">
                {notification}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Index