import { useEffect, useState } from 'react';

const TASKS_STORAGE_KEY = 'taskManagement.tasks';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(TASKS_STORAGE_KEY);
            if (stored) {
                setTasks(JSON.parse(stored));
            }
        } catch (error) {
            console.error('Không thể đọc tasks từ localStorage', error);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setEditingTaskId(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedTitle = title.trim();
        if (!trimmedTitle) {
            return;
        }

        if (editingTaskId) {
            setTasks((currentTasks) =>
                currentTasks.map((task) =>
                    task.id === editingTaskId
                        ? { ...task, title: trimmedTitle, description: description.trim() }
                        : task
                )
            );
        } else {
            setTasks((currentTasks) => [
                {
                    id: Date.now().toString(),
                    title: trimmedTitle,
                    description: description.trim(),
                    createdAt: new Date().toISOString(),
                },
                ...currentTasks,
            ]);
        }

        resetForm();
    };

    const handleEdit = (task) => {
        setTitle(task.title);
        setDescription(task.description);
        setEditingTaskId(task.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = (taskId) => {
        setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
        if (editingTaskId === taskId) {
            resetForm();
        }
    };

    return (
        <section className="section task-page">
            <div className="container">
                <div className="section-header">
                    <h1 className="section-title">Quản lý công việc</h1>
                    <p className="section-subtitle">
                        Tạo công việc mới, chỉnh sửa nội dung và xóa bất kỳ công việc nào bạn không cần.
                    </p>
                </div>

                <div className="task-grid">
                    <div className="form-container task-form-container">
                        <h2 className="form-title">{editingTaskId ? 'Chỉnh sửa công việc' : 'Tạo công việc mới'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="task-title">Tiêu đề</label>
                                <input
                                    id="task-title"
                                    className="form-control"
                                    type="text"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                    placeholder="Nhập tiêu đề công việc"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="task-description">Mô tả</label>
                                <textarea
                                    id="task-description"
                                    className="form-control"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                    placeholder="Nhập mô tả công việc"
                                    rows={5}
                                />
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary">
                                    {editingTaskId ? 'Lưu thay đổi' : 'Thêm công việc'}
                                </button>
                                {editingTaskId && (
                                    <button type="button" className="btn btn-outline" onClick={resetForm}>
                                        Hủy
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="task-list-container">
                        <div className="task-list-header">
                            <h2 className="section-title">Danh sách công việc</h2>
                            <p className="section-subtitle">
                                Bạn có {tasks.length} công việc {tasks.length === 1 ? 'trong danh sách' : 'trong danh sách'}.
                            </p>
                        </div>

                        {tasks.length === 0 ? (
                            <div className="task-empty">
                                <p>Chưa có công việc nào. Thêm công việc mới bằng form bên trái.</p>
                            </div>
                        ) : (
                            <div className="task-list">
                                {tasks.map((task) => (
                                    <div key={task.id} className="task-card">
                                        <div>
                                            <h3>{task.title}</h3>
                                            {task.description && <p>{task.description}</p>}
                                        </div>
                                        <div className="task-card-footer">
                                            <button className="btn btn-outline" onClick={() => handleEdit(task)}>
                                                Sửa
                                            </button>
                                            <button className="btn btn-accent" onClick={() => handleDelete(task.id)}>
                                                Xóa
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tasks;
