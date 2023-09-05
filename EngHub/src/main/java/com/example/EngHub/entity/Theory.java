package com.example.EngHub.entity;



import javax.persistence.*;
@Entity
@Table(name = "theory_data")
public class Theory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String data;
    private String next;
    private String prev;
    private String title;

    public Theory(String name, String data, String next, String prev, String title) {
        this.name = name;
        this.data = data;
        this.next = next;
        this.prev = prev;
        this.title = title;
    }

    public Theory() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getNext() {
        return next;
    }

    public void setNext(String next) {
        this.next = next;
    }

    public String getPrev() {
        return prev;
    }

    public void setPrev(String prev) {
        this.prev = prev;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
